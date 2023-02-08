import { useState, useEffect, useRef } from "react";
import { FlatList, Alert, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppError } from "~/utils/AppError";
import { playerAddByGroup } from "~/storage/player/playerAddByGroup";
import { playerRemoveByGroup } from "~/storage/player/playerRemoveByGroup";
import { PlayerStorageDTO as Player } from "~/storage/player/DTOS/PlayerStorageDTO";
import { playersGetByGroupAndTeam } from "~/storage/player/playersGetByGroupAndTeam";

import { Input } from "~/components/Input";
import { Loader } from "~/components/Loader";
import { Button } from "~/components/Button";
import { Filter } from "~/components/Filter";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { ListEmpty } from "~/components/ListEmpty";
import { ButtonIcon } from "~/components/ButtonIcon";
import { PlayerCard } from "~/components/PlayerCard";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { groupRemove } from "~/storage/group/groupRemove";

interface RouteParams {
  group: string;
}

export function Players() {
  const [isLoading, setLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<Player[]>([]);

  const route = useRoute();
  const params = route.params as RouteParams;
  const newPlayerNameInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  async function fetchPlayersByTeam() {
    try {
      setLoading(true);
      const playersByTeam: Player[] = await playersGetByGroupAndTeam(
        params.group,
        team
      );
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Jogadores",
        "Não foi possível carregar as pessoas do time selecionado"
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleAddNewPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Novo jogador",
        "Informe o nome do jogador que deseja adicionar"
      );
    }

    const newPlayer: Player = {
      name: newPlayerName,
      team: team,
    };

    try {
      await playerAddByGroup(newPlayer, params.group);
      await fetchPlayersByTeam();
      setNewPlayerName("");
      newPlayerNameInputRef.current?.blur();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo jogador", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo jogador", "Não foi possível adicionar");
      }
    }
  }

  async function handleRemovePlayer(player: Player, group: string) {
    try {
      await playerRemoveByGroup(player, group);
      await fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover o jogador", "Não foi remover o jogador");
    }
  }

  async function handleDeleteGroup() {
    try {
      await groupRemove(params.group);
      navigation.navigate("Groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Deletar grupo", "Não foi possível deletar o grupo.");
    }
  }

  const messageEmpty = {
    component: ListEmpty({ message: "Não há pessoas nesse time." }),
  };

  const contentListPlayer = {
    styles: [{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }],
  };

  const renderItemPlayers = {
    fn(player: Player) {
      return (
        <PlayerCard
          name={player.name}
          onRemove={() => handleRemovePlayer(player, params.group)}
        />
      );
    },
  };

  const renderItemFilter = {
    fn(item: string) {
      return (
        <Filter
          title={item}
          isActive={item === team}
          onPress={() => setTeam(item)}
        />
      );
    },
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header backButton={true} />

      <Highlight
        title={params.group}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          value={newPlayerName}
          autoCorrect={false}
          placeholder="Nome da pessoa"
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddNewPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddNewPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          horizontal
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => renderItemFilter.fn(item)}
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      {isLoading ? (
        <Loader />
      ) : (
        <FlatList<Player>
          data={players}
          showsVerticalScrollIndicator={false}
          keyExtractor={(player: Player) => player.name}
          renderItem={({ item: player }) => renderItemPlayers.fn(player)}
          ListEmptyComponent={messageEmpty.component}
          contentContainerStyle={contentListPlayer.styles}
        />
      )}

      <Button
        title="Remover Turma"
        type="secondary"
        onPress={handleDeleteGroup}
      />
    </Container>
  );
}

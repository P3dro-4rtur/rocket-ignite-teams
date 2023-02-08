import { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { emptyListMessage } from "~/utils/emptyMessage";
import { groupsGetAll } from "~/storage/group/groupsGetAll";

import { Loader } from "~/components/Loader";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { GroupCard } from "~/components/GroupCard";
import { ListEmpty } from "~/components/ListEmpty";
import { Button } from "~/components/Button";

import { Container, GroupList } from "./styles";

export function Groups() {
  const [isLoading, setLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNavigateNewGroup() {
    navigation.navigate("NewGroup");
  }

  async function fetchGroups() {
    try {
      setLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("Players", { group });
  }

  const renderItemGroup = {
    fn(item: string) {
      return <GroupCard title={item} onPress={() => handleOpenGroup(item)} />;
    },
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turma" subtitle="Jogue com a sua turma" />

      {isLoading ? (
        <Loader />
      ) : (
        <GroupList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => renderItemGroup.fn(item)}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={ListEmpty(emptyListMessage)}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNavigateNewGroup} />
    </Container>
  );
}

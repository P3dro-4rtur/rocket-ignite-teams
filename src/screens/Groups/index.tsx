import React, { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { GroupCard } from "~/components/GroupCard";
import { ListEmpty } from "~/components/ListEmpty";
import { Button } from "~/components/Button";
import { Container, GroupList } from "./styles";
import { groupsGetALl } from "~/storage/group/groupsGetAll";

const emptyListMessage = { message: "Que tal cadastrar a primeira turma?" };

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const ListProps = {
    data: groups,
    key: (item: string) => item,
    render: ({ item }: { item: string }) => {
      return GroupCard({ title: item, onPress: undefined });
    },
    contentStyle: groups.length === 0 && { flex: 1 },
    emptyList: ListEmpty(emptyListMessage),
  };

  function handleNavigateNewGroup() {
    navigation.navigate("NewGroup");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetALl();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turma" subtitle="Jogue com a sua turma" />

      <GroupList
        data={ListProps.data}
        keyExtractor={ListProps.key}
        renderItem={ListProps.render}
        contentContainerStyle={ListProps.contentStyle}
        ListEmptyComponent={ListProps.emptyList}
      />

      <Button title="Criar nova turma" onPress={handleNavigateNewGroup} />
    </Container>
  );
}

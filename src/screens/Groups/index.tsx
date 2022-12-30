import React, { useState } from "react";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { GroupCard } from "~/components/GroupCard";
import { ListEmpty } from "~/components/ListEmpty";
import { Button } from "~/components/Button";
import { Container, GroupList, Title } from "./styles";

export type Group = string;

const emptyListMessage = { message: "Que tal cadastrar a primeira turma?" };

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([]);

  const ListProps = {
    data: groups,

    key: (item: Group) => item,

    render: ({ item }: { item: Group }) =>
      GroupCard({ title: item, onPress: undefined }),

    contentStyle: groups.length === 0 && { flex: 1 },

    emptyList: ListEmpty(emptyListMessage),
  };

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

      <Button title="Criar nova turma" />
    </Container>
  );
}

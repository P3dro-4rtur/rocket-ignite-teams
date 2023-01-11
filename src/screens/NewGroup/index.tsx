import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Input } from "~/components/Input";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = React.useState<string>("");

  const navigation = useNavigation();

  function handleCreateGroup() {
    navigation.navigate("Players", { group });
  }

  return (
    <Container>
      <Header backButton={true} />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="cria a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button
          title="Criar"
          onPress={handleCreateGroup}
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  );
}

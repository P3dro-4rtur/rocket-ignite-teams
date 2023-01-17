import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "~/components/Input";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";

import { Container, Content, Icon } from "./styles";
import { groupCreate } from "~/storage/group/groupCreate";
import { AppError } from "~/utils/AppError";

export function NewGroup() {
  const [group, setGroup] = React.useState<string>("");

  const navigation = useNavigation();

  async function handleCreateGroup() {
    if (group.trim().length === 0) {
      return Alert.alert("Novo Grupo", "Informe o nome da turma.");
    }

    await groupCreate(group)
      .then(() => {
        navigation.navigate("Players", { group });
      })
      .catch((error) => {
        if (error instanceof AppError) {
          Alert.alert("Novo Grupo", error.message);
        } else {
          console.log(error);
          Alert.alert("Novo grupo", "Não foi possível criar um novo grupo.");
        }
      });
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

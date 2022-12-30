import React from "react";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { Input } from "~/components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header backButton={true} />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="cria a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}

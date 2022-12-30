import React from "react";
import { ButtonIcon } from "~/components/ButtonIcon";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";

import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header backButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <ButtonIcon />
    </Container>
  );
}
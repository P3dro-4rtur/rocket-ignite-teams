import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

interface Props extends TouchableOpacityProps {}

export function ButtonIcon({}: Props) {
  return (
    <Container>
      <Icon />
    </Container>
  );
}

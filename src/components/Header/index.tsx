import React from "react";
import { useTheme } from "styled-components/native";

import appLogo from "@assets/logo.png";
import { Container, Logo, Button, ArrowLeft } from "./styles";

interface Props {
  backButton?: boolean;
}

export function Header({ backButton = false }: Props) {
  const theme = useTheme();

  const BackButton = () => {
    if (backButton) {
      return (
        <Button>
          <ArrowLeft />
        </Button>
      );
    }
    return null;
  };

  return (
    <Container haveBackButton={backButton}>
      <BackButton />
      <Logo source={appLogo} />
    </Container>
  );
}

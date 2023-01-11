import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import appLogo from "@assets/logo.png";
import { Container, Logo, Button, ArrowLeft } from "./styles";

interface Props {
  backButton?: boolean;
}

export function Header({ backButton = false }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("Groups");
  }

  const BackButton = () => {
    if (backButton) {
      return (
        <Button onPress={handleGoBack}>
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

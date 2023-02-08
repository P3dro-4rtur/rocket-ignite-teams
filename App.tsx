import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routes } from "~/routes";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";
import { Loader } from "@components/Loader";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) return <Loader />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      <Routes />
    </ThemeProvider>
  );
}

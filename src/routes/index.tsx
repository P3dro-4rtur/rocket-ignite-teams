import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";

export function Routes() {
  const theme = useTheme();

  const counterGlitch = {
    style: {
      flex: 1,
      backgroundColor: theme.colors.gray_400,
    },
  };

  return (
    <View {...counterGlitch}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}

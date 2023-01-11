import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { Groups } from "~/screens/Groups";
import { Players } from "~/screens/Players";
import { NewGroup } from "~/screens/NewGroup";

interface NavigatorProps {
  initialRouteName: string;
  screenOptions: NativeStackNavigationOptions;
}

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const navigatorProps: NavigatorProps = {
    initialRouteName: "Groups",
    screenOptions: {
      headerShown: false,
    },
  };

  return (
    <Navigator {...navigatorProps}>
      <Screen name={"Groups"} component={Groups} />
      <Screen name={"Players"} component={Players} />
      <Screen name={"NewGroup"} component={NewGroup} />
    </Navigator>
  );
}

import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "primary" | "secondary";

interface Props {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;

  margin-left: ${RFValue(12)}px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "primary" ? theme.colors.green_700 : theme.colors.red,
}))``;

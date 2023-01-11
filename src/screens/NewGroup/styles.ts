import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: RFValue(56),
  color: theme.colors.green_700,
}))`
  align-self: center;
`;

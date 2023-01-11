import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: center;

  width: 100%;
  border-radius: ${RFValue(6)}px;

  background-color: ${({ theme }) => theme.colors.gray_700};
`;

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;

  margin: ${RFValue(32)}px 0 ${RFValue(12)}px;
`;

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.sizes.SM}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray_200};
  `}
`;

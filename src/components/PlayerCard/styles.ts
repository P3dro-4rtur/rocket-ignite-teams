import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: ${RFValue(56)}px;

  margin-bottom: ${RFValue(16)}px;

  border-radius: ${RFValue(6)}px;

  background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const Name = styled.Text`
  ${({ theme }) =>
    css`
      flex: 1;

      font-size: ${theme.sizes.MD}px;
      font-family: ${theme.fonts.regular};
      color: ${theme.colors.gray_200};
    `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: RFValue(24),
  color: theme.colors.gray_200,
}))`
  margin-left: ${RFValue(16)}px;
  margin-right: ${RFValue(4)}px;
`;

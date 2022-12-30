import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export interface FilterStyleProps {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  align-items: center;
  justify-content: center;

  width: ${RFValue(70)}px;
  height: ${RFValue(38)}px;

  margin-right: ${RFValue(12)}px;
  border-radius: ${RFValue(4)}px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: ${RFValue(1)}px solid ${theme.colors.green_700};
    `};
`;
export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) =>
    css`
      font-size: ${theme.sizes.SM}px;
      font-family: ${({ theme }) => theme.fonts.bold};
      color: ${({ theme }) => theme.colors.white};
    `};
`;

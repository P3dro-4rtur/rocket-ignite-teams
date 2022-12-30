import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Message = styled.Text`
  text-align: center;
  line-height: ${RFValue(26)}px;

  ${({ theme }) => css`
    font-size: ${theme.sizes.SM}px;
    font-family: ${theme.fonts.regular};

    color: ${theme.colors.gray_300};
  `}
`;

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  margin: ${RFValue(32)}px ${RFValue(0)}px;
`;

export const Title = styled.Text`
  text-align: center;
  line-height: ${RFValue(28)}px;

  ${({ theme }) => css`
    font-size: ${theme.sizes.XL}px;
    font-family: ${theme.fonts.bold};

    color: ${theme.colors.white};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  line-height: ${RFValue(26)}px;

  ${({ theme }) => css`
    font-size: ${theme.sizes.MD}px;
    font-family: ${theme.fonts.regular};

    color: ${theme.colors.gray_300};
  `}
`;

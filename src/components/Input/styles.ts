import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  flex: 1;
  padding: ${RFValue(16)}px;

  min-height: ${RFValue(56)}px;
  max-height: ${RFValue(56)}px;

  border-radius: ${RFValue(6)}px;

  ${({ theme }) => css`
    font-size: ${theme.sizes.MD}px;
    font-family: ${theme.fonts.regular};

    color: ${theme.colors.white};
    background-color: ${theme.colors.gray_700};
  `}
`;

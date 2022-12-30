import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export type ButtonTypeStyleProps = "primary" | "secondary";

interface Props {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  align-items: center;
  justify-content: center;

  min-height: ${RFValue(56)}px;
  max-height: ${RFValue(56)}px;

  border-radius: ${RFValue(6)}px;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.colors.green_700 : theme.colors.red_dark};
`;

export const Title = styled.Text`
  line-height: ${RFValue(24)}px;

  ${({ theme }) => css`
    font-size: ${theme.sizes.MD}px;
    font-family: ${theme.fonts.bold};

    color: ${theme.colors.white};
  `}
`;

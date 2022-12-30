import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { UsersThree, IconProps } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: ${RFValue(90)}px;

  padding: ${RFValue(24)}px;
  margin-bottom: ${RFValue(12)}px;

  border-radius: ${RFValue(6)}px;

  background-color: ${({ theme }) => theme.colors.gray_500};
`;
export const Title = styled.Text`
  line-height: ${RFValue(29)}px;

  ${({ theme }) => css`
    font-size: ${theme.sizes.MD}px;
    font-family: ${theme.fonts.regular};

    color: ${theme.colors.gray_200};
  `}
`;

export const Icon = styled(UsersThree).attrs(
  ({ theme }): IconProps => ({
    size: 32,
    color: theme.colors.green_700,
    weight: "fill",
  })
)`
  margin-right: ${RFValue(20)}px;
`;

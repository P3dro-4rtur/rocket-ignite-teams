import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { CaretLeft } from "phosphor-react-native";

interface ContainerProps {
  haveBackButton: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  align-items: center;
  justify-content: ${({ haveBackButton }) =>
    haveBackButton ? "space-between" : "center"};

  width: 100%;
`;

export const Button = styled.TouchableOpacity``;

export const ArrowLeft = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: 32,
}))``;

export const Logo = styled.Image`
  width: ${RFValue(46)}px;
  height: ${RFValue(55)}px;
`;

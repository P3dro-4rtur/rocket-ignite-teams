import styled from "styled-components/native";
import theme from "~/theme";

export const Background = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: ${theme.colors.gray_600};
`;

export const StatusBar = styled.StatusBar.attrs({
  translucent: true,
  backgroundColor: theme.colors.gray_600,
})``;

export const Load = styled.ActivityIndicator.attrs({
  color: theme.colors.green_700,
  size: "large",
})``;

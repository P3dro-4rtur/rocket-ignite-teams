import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: ${({ theme }) => theme.sizes.XL}px;
  background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const Title = styled.Text``;

export const GroupList = styled(
  FlatList as new (props: FlatListProps<string>) => FlatList<string>
)``;

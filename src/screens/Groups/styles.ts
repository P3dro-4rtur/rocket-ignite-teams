import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { Group } from ".";

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.sizes.XL}px;
  background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const Title = styled.Text``;

export const GroupList = styled(
  FlatList as new (props: FlatListProps<Group>) => FlatList<Group>
)``;

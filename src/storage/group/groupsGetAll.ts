import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../keys";

export async function groupsGetAll(): Promise<string[]> {
  try {
    const storage = await AsyncStorage.getItem(
      AsyncStorageKeys.group_collection
    );
    const groups: string[] = storage ? JSON.parse(storage) : [];
    return groups;
  } catch (error) {
    throw error;
  }
}

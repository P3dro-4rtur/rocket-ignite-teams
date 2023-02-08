import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../keys";
import { AppError } from "~/utils/AppError";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemove(group: string) {
  try {
    const storage = await groupsGetAll();
    const filtered = storage.filter((groupStorage: string) => {
      groupStorage !== group;
    });
    const groups = JSON.stringify(filtered);
    await AsyncStorage.setItem(AsyncStorageKeys.group_collection, groups);
    await AsyncStorage.removeItem(
      `${AsyncStorageKeys.player_collection}-${group}`
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

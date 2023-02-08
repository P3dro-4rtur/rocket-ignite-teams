import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../keys";
import { AppError } from "~/utils/AppError";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroupName: string) {
  try {
    const groups: string[] = await groupsGetAll();
    const newData = JSON.stringify([...groups, newGroupName]);
    const groupAlreadyExists = groups.includes(newGroupName);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    await AsyncStorage.setItem(AsyncStorageKeys.group_collection, newData);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "~/utils/AppError";
import { AsyncStorageKeys } from "../keys";
import { groupsGetALl } from "./groupsGetAll";

export async function groupCreate(newGroupName: string) {
  try {
    const groups: string[] = await groupsGetALl();

    const groupAlreadyExists = groups.includes(newGroupName);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const newData = JSON.stringify([...groups, newGroupName]);
    await AsyncStorage.setItem(AsyncStorageKeys.group_collection, newData);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

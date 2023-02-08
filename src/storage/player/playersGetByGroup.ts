import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../keys";
import { PlayerStorageDTO } from "./DTOS/PlayerStorageDTO";

const { player_collection } = AsyncStorageKeys;

export async function playersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${player_collection}-${group}`);
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
    return players;
  } catch (error) {}
}

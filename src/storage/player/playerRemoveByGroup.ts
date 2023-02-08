import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "~/storage/keys";
import { AppError } from "~/utils/AppError";
import { PlayerStorageDTO as Player } from "./DTOS/PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

async function playerRemoveByGroup(player: Player, group: string) {
  try {
    const storage: Player[] = (await playersGetByGroup(group)) ?? [];
    const filteredData: Player[] = storage.filter(
      (p: Player) => p.name !== player.name
    );
    const players = JSON.stringify(filteredData);
    const key = `${AsyncStorageKeys.player_collection}-${group}`;
    await AsyncStorage.setItem(key, players);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { playerRemoveByGroup };

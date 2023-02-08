import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../keys";
import { AppError } from "~/utils/AppError";
import { PlayerStorageDTO } from "./DTOS/PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

const { player_collection } = AsyncStorageKeys;

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const key = `${player_collection}-${group}`;
    const storagePlayers = (await playersGetByGroup(group)) ?? [];

    const playerAlreadyExist = storagePlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExist.length !== 0) {
      throw new AppError("Esse jogador já consta em um time.");
    }

    const storage = JSON.stringify([...storagePlayers, newPlayer]);
    await AsyncStorage.setItem(key, storage);
  } catch (error) {
    throw error;
  }
}

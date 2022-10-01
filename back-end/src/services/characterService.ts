import { CharacterInfo } from "../types/index.js";
import { User } from "@prisma/client";
import { characterRepository } from "../repositories/characterRepository.js";

async function createFavourite(characterInfo: CharacterInfo, user: User) {
  const userHasCharacter = await characterRepository.findCharacterByUserId(
    characterInfo.id,
    user.id
  );
  if (userHasCharacter) {
    return await characterRepository.removeFavourite(characterInfo.id, user.id);
  }

  await characterRepository.insertFavourite(characterInfo, user.id);
}

async function getFavourites(user: User) {
  return await characterRepository.getFavouritesByUserId(user.id);
}

export const characterService = {
  createFavourite,
  getFavourites,
};

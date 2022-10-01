import { authRepository } from "../repositories/authRepository.js";
import throwError from "../utils/throwError.js";
import { CharacterInfo } from "../types/index.js";
import { User } from "@prisma/client";
import { characterRepository } from "../repositories/characterRepository.js";

async function favourite(characterInfo: CharacterInfo, user: User) {
  const userHasCharacter = await characterRepository.findCharacterByUserId(
    characterInfo.id,
    user.id
  );
  if (userHasCharacter) {
    await characterRepository.removeFavourite(characterInfo.id, user.id);
  }

  await characterRepository.insertFavourite(characterInfo, user.id);
}

export const characterService = {
  favourite,
};

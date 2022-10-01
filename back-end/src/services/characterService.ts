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
  const characters = await characterRepository.getFavouritesByUserId(user.id);

  const formattedCharacters = formatFavouritedCharacters(characters);

  return formattedCharacters;
}

function formatFavouritedCharacters(characters) {
  if (characters.length === 0) return characters;
  for (let i = 0; i < characters.length; i++) {
    characters[i].origin = {
      name: characters[i].originName,
      url: characters[i].originUrl,
    };
    characters[i].location = {
      name: characters[i].locationName,
      url: characters[i].locationUrl,
    };
    characters[i].id = characters[i].character_id;
    delete characters[i].character_id;
    delete characters[i].locationName;
    delete characters[i].locationUrl;
    delete characters[i].originName;
    delete characters[i].originUrl;
    delete characters[i].userId;
    delete characters[i].userId;
  }
  return characters;
}

export const characterService = {
  createFavourite,
  getFavourites,
};

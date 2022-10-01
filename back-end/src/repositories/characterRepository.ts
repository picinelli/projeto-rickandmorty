import prisma from "../database.js";
import { CharacterInfo } from "../types/index.js";

async function findCharacterByUserId(characterId: number, userId: number) {
  return await prisma.favourite.findFirst({
    where: { character_id: characterId, userId },
  });
}

async function getFavouritesByUserId(userId: number) {
  return await prisma.favourite.findFirst({
    where: { userId },
  });
}

async function removeFavourite(characterId: number, userId: number) {
  return await prisma.favourite.delete({
    where: {
      userId_character_id: { character_id: characterId, userId },
    },
  });
}

async function insertFavourite(characterInfo: CharacterInfo, userId: number) {
  return await prisma.favourite.create({
    data: {
      userId,
      character_id: characterInfo.id,
      name: characterInfo.name,
      status: characterInfo.status,
      species: characterInfo.species,
      type: characterInfo.type,
      gender: characterInfo.gender,
      originName: characterInfo.origin.name,
      originUrl: characterInfo.origin.url,
      locationName: characterInfo.location.name,
      locationUrl: characterInfo.location.url,
      image: characterInfo.image,
      episode: characterInfo.episode,
      url: characterInfo.url,
      created: characterInfo.created,
    },
  });
}

export const characterRepository = {
  getFavouritesByUserId,
  findCharacterByUserId,
  insertFavourite,
  removeFavourite,
};

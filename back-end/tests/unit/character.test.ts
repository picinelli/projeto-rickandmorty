import { jest } from "@jest/globals";
import { characterRepository } from "../../src/repositories/characterRepository.js";
import { characterService } from "../../src/services/characterService.js";
import characterFactory from "../factories/characterFactory.js";
import userFactory from "../factories/userFactory.js";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("UNIT test - createFavourite", () => {
  it("given already favourited character, should remove favourite", async () => {
    const characterInfo = characterFactory.createCharacterInfo();
    const user = userFactory.createUser();
    jest
      .spyOn(characterRepository, "findCharacterByUserId")
      .mockImplementationOnce((): any => true);
    jest
      .spyOn(characterRepository, "removeFavourite")
      .mockImplementationOnce((): any => true);

    await characterService.createFavourite(characterInfo, user);

    expect(characterRepository.removeFavourite).toBeCalledTimes(1);
  });

  it("given new character, should add favourite", async () => {
    const characterInfo = characterFactory.createCharacterInfo();
    const user = userFactory.createUser();
    jest
      .spyOn(characterRepository, "findCharacterByUserId")
      .mockImplementationOnce((): any => false);
    jest
      .spyOn(characterRepository, "insertFavourite")
      .mockImplementationOnce((): any => true);

    await characterService.createFavourite(characterInfo, user);

    expect(characterRepository.insertFavourite).toBeCalledTimes(1);
  });
});

describe("UNIT test - getFavourites", () => {
  it("given no favourited characters, should call getFavourites function and return empty array", async () => {
    const characterInfo = characterFactory.createCharacterInfo();
    const user = userFactory.createUser();
    jest
      .spyOn(characterRepository, "getFavouritesByUserId")
      .mockImplementationOnce((): any => true);

    await characterService.getFavourites(user);

    expect(characterRepository.getFavouritesByUserId).toBeCalledTimes(1);
  });

  it("given a favourited character, should call getFavourites function and return array", async () => {
    const characterInfo = characterFactory.createCharacterInfo();
    const user = userFactory.createUser();
    jest
      .spyOn(characterRepository, "getFavouritesByUserId")
      .mockImplementationOnce((): any => {
        return [characterInfo];
      });

    await characterService.getFavourites(user);

    expect(characterRepository.getFavouritesByUserId).toBeCalledTimes(1);
  });
});

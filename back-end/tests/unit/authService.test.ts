import { jest } from "@jest/globals";

import bcrypt from "bcrypt";
import { authRepository } from "../../src/repositories/authRepository.js";
import { authService } from "../../src/services/authService.js";
import userFactory from "../factories/userFactory.js";

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.clearAllMocks();
})

describe("UNIT test - signUp", () => {
  it("given existent name, should throw error", async () => {
    const userData = userFactory.createUser();
    jest
      .spyOn(authRepository, "getUserByName")
      .mockResolvedValueOnce(userFactory.createUser());

    const request = authService.signUp(userData);

    expect(request).rejects.toEqual({
      type: 409,
      message: "This name is already in use",
    });
  });

  it("given non-existent name, should create account", async () => {
    jest.spyOn(authRepository, "getUserByName").mockResolvedValueOnce(null);
    jest
      .spyOn(authRepository, "insertUser")
      .mockResolvedValueOnce(userFactory.createUser());

    await authService.signUp(userFactory.createLogin());

    expect(authRepository.insertUser).toBeCalledTimes(1);
  });
});

describe("UNIT test - signIn", () => {
  it("given non-existent name, should receive error", async () => {
    jest.spyOn(authRepository, "getUserByName").mockResolvedValueOnce(null);

    const request = authService.signIn(userFactory.createLogin());

    expect(request).rejects.toEqual({
      type: 404,
      message: "This account does not exists!",
    });
  });

  it("given existent name with correct pass, should return token", async () => {
    jest
      .spyOn(authRepository, "getUserByName")
      .mockResolvedValueOnce(userFactory.createUser());
    jest.spyOn(bcrypt, "compareSync").mockImplementation(() => true);

    const request = await authService.signIn(userFactory.createLogin());

    expect(request.token).toBeTruthy();
  });

  it("given existent name with incorrect pass, should return error 403", async () => {
    jest
      .spyOn(authRepository, "getUserByName")
      .mockResolvedValueOnce(userFactory.createUser());
    jest.spyOn(bcrypt, "compareSync").mockImplementation(() => false);

    const request = authService.signIn(userFactory.createLogin());

    expect(request).rejects.toEqual({
      type: 403,
      message: "Name or password incorrect!",
    });
  });
});

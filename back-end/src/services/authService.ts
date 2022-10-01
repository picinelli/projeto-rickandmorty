import bcrypt from "bcrypt";

import { authRepository } from "../repositories/authRepository.js";
import throwError from "../utils/throwError.js";
import { encryptBcrypt } from "../utils/encrypt.js";
import { UserInfo } from "../types/index.js";
import createToken from "../utils/createToken.js";

export interface tokenInfo {
  token: string;
  userId: number;
}

async function signUp(userInfo: UserInfo) {
  const user = await authRepository.getUserByName(userInfo.name);
  if (user) throwError("This name is already in use", 409);

  userInfo = { ...userInfo, password: await encryptBcrypt(userInfo.password) };

  await authRepository.insertUser(userInfo);
}

async function signIn(userInfo: UserInfo) {
  const { name, password } = userInfo;
  const user = await authRepository.getUserByName(name);
  if (!user) throwError("This account does not exists!", 404);

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) throwError("Name or password incorrect!", 403);

  return createToken(user);
}

export const authService = {
  signUp,
  signIn,
};

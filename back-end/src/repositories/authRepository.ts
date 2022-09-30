import prisma from "../database.js";
import { UserInfo } from "../types/index.js";

async function getUserByName(name: string) {
  return await prisma.user.findUnique({ where: { name } });
}

async function insertUser(userInfo: UserInfo) {
  return await prisma.user.create({
    data: {
      name: userInfo.name,
      password: userInfo.password,
    },
  });
}

export const authRepository = {
  getUserByName,
  insertUser,
};

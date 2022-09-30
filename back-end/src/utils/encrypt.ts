import bcrypt from "bcrypt";

export async function encryptBcrypt(element: string) {
  const saltRounds = 10;
  return await bcrypt.hash(element, saltRounds);
}

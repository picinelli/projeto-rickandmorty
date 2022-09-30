import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export default function createToken(user: User) {
  return { token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET) };
}

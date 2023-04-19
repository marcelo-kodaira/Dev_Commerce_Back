import bcrypt from "bcrypt";
import { ICreateUserRequest } from "../../interfaces/user";
import { prisma } from "../../prisma";

export const createUserService = async (data: ICreateUserRequest) => {
  const passwordHash = bcrypt.hashSync(data.password, 10);
  const { password, ...rest } = data;

  const user = await prisma.user.create({
    data: {
      ...rest,
      password: passwordHash,
    },
  });

  const { password: passwd, ...userNoPassword } = user;

  return userNoPassword;
};
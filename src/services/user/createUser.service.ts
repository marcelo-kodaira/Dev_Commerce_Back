import bcrypt from "bcrypt";
import { ICreateUserRequest, IUserResponse } from "../../interfaces/user";
import { prisma } from "../../prisma";

export const createUserService = async (data: ICreateUserRequest):Promise<IUserResponse> => {
  const passwordHash = bcrypt.hashSync(data.password, 10);
  const { password, ...rest } = data;

  const user = await prisma.users.create({
    data: {
      ...rest,
      password: passwordHash,
    },
  });

  const { password: passwd, ...userNoPassword } = user;

  return userNoPassword;
}
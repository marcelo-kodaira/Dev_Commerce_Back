import bcrypt from "bcrypt";
import { ICreateUserRequest, IUserResponse } from "../../interfaces/user";
import { prisma } from "../../prisma";
import ErrorHttp from "../../error/Error";

export const createUserService = async (data: ICreateUserRequest):Promise<IUserResponse> => {
  const passwordHash = bcrypt.hashSync(data.password, 10);
  const { password, ...rest } = data;

  const emailAlreadyExist = await prisma.users.findUnique({
    where:{
      email: data.email
    }
  })

  if(emailAlreadyExist){
    throw new ErrorHttp("Email já cadastrado",400)
  }

  const user = await prisma.users.create({
    data: {
      ...rest,
      password: passwordHash,
    },
  });

  const { password: passwd, ...userNoPassword } = user;

  return userNoPassword;
}
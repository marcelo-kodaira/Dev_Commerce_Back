import { IUpdateUserRequest } from "../../interfaces/user";
import { prisma } from "../../prisma";
import bcrypt from "bcrypt";

export const updatedUserService = async (data:IUpdateUserRequest, id: string) =>{

    
    const { password, ...rest } = data;


    const user = await prisma.users.update({
        data:{
            ...rest,
            password:  bcrypt.hashSync(password, 10)
        },
        where: {
            id
          }
    });

    const { password: passwd, ...userNoPassword } = user;

    return userNoPassword;
};
import {IUpdateProductRequest } from "../../interfaces/product";
import { IUserResponse } from "../../interfaces/user";
import { prisma } from "../../prisma";

export const updateProductService = async (data:IUpdateProductRequest, id: string):Promise<IUserResponse> =>{

    const product = await prisma.product.update({
        data:{
            ...data
        },
        where:{
            id
        }
    })

    return product
}
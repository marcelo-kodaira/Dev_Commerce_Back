import {IProductResponse, IUpdateProductRequest } from "../../interfaces/product";
import { prisma } from "../../prisma";

export const updateProductService = async (data:IUpdateProductRequest, id: string):Promise<IProductResponse> =>{

    const product = await prisma.products.update({
        data:{
            ...data
        },
        where:{
            id
        }
    })

    return product
}
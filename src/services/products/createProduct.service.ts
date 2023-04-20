import { IProductRequest, IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma";

export const createProductService = async(data:IProductRequest):Promise<IProductResponse> =>{

    const product = await prisma.product.create({
        data:{
            data
        }
    });
    
    return product;
}
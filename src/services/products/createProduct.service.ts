import { IProductRequest, IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma";

export const createProductService = async(data:IProductRequest,id:string):Promise<IProductResponse> =>{


    const product = await prisma.products.create({
        data: {
            ...data,
            user: {
              connect: { 
                id 
              },
            },
          },
          select:{
            id: true,
            name: true,
            price: true,
            description: true,
            user:{
              select:{
                name: true,
                email: true
              }
            }
          }
        });
    
    return product;
}
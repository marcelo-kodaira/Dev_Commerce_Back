import { IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma"

export const readIdProductService = async (id: string):Promise<IProductResponse | null> =>{

    const product = await prisma.products.findUnique({
        where:{
            id
        }, select:{
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

    return product

}
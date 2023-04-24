import { IProductResponse} from "../../interfaces/product";
import { prisma } from "../../prisma"
import { Prisma } from '@prisma/client';


export const readProductsService = async (name?:string, price?:string):Promise<IProductResponse[]> =>{

    let orderBy: Prisma.ProductsOrderByWithRelationInput = {}

    if (price) {
      orderBy.price = price === 'lowest' ? 'asc' : 'desc';
    }

    const products = await prisma.products.findMany({
        where:{
          name:{
            contains: name,
            mode: "insensitive"
          }
        },
        select:{
            id: true,
            name: true,
            price: true,
            description: true,
          },
          orderBy
    });

    return products;
}
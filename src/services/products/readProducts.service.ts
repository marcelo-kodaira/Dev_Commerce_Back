import { IProductResponse} from "../../interfaces/product";
import { prisma } from "../../prisma"
import { Prisma } from '@prisma/client';


export const readProductsService = async (name?:string, price?:string):Promise<IProductResponse[]> =>{

    let orderBy: Prisma.ProductsOrderByWithRelationInput = {}

    if (price) {
      if(price === 'lowest'){
        orderBy.price = 'asc'
      }else if(price === 'highest')
      orderBy.price = 'desc';
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
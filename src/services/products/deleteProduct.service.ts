import { prisma } from "../../prisma"

export const deleteProductService = async(id:string):Promise<void> =>{

    await prisma.product.delete({
        where:{
            id
        }
    });
}
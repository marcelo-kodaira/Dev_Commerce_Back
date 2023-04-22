import { Request, Response } from "express";
import { readUserProductsService } from "../../services/products/readUserProducts.service";

export const readUserProductController = async(req: Request, res: Response)=>{
    const id = req.user.id

    const product = await readUserProductsService(id);

    return res.status(200).json(product);
}
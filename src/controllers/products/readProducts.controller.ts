import { Request, Response } from "express";
import { readProductsService } from "../../services/products/readProducts.service";

export const readProductsController = async(req: Request, res: Response) =>{
    const products = await readProductsService();

    return res.status(200).json(products);
}
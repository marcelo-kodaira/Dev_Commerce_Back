import { Request, Response } from "express";
import { readProductsService } from "../../services/products/readProducts.service";

export const readProductsController = async(req: Request, res: Response) =>{
    const name:string = req.query.name as string;
    const price:string = req.query.price as string;

    const products = await readProductsService(name,price);

    return res.status(200).json(products);
}
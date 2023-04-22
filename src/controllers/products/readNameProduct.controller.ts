import { Request, Response } from "express";
import { readNameProductService } from "../../services/products/readNameProduct.service";

export const readNameProductController = async(req: Request, res: Response)=>{
    const {name} = req.params;
    const product = await readNameProductService(name);

    return res.status(200).json(product);
}
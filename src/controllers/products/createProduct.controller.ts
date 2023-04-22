import { Request, Response } from "express";
import { createProductService } from "../../services/products/createProduct.service";

export const createProductController = async(req: Request, res: Response) =>{
    const data = req.body;
    const id = req.user.id

    const product = await createProductService(data,id);

    return res.status(201).json(product);

}
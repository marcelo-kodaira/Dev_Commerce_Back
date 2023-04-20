import { Request, Response } from "express";
import { readIdProductService } from "../../services/products/readIdProduct.service";

export const readIdProductController = async(req: Request, res: Response) =>{
    const {id} = req.params;
    const product = await readIdProductService(id);

    return res.status(200).json(product)

}
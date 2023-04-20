import { Request, Response } from "express";
import { getNameProductService } from "../../services/products/getNameProduct.service";

export const getNameProductController = async(req: Request, res: Response)=>{
    const {name} = req.params;
    const product = await getNameProductService(name);

    return res.status(200).json(product);
}
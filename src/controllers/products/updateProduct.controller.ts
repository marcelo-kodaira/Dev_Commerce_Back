import { Request, Response } from "express";
import { updateProductService } from "../../services/products/updateProduct.service";

export const updateProductController = async (req: Request, res: Response) =>{
    const data = req.body;
    const {id} = req.params;

    const updatedProduct = await updateProductService(data,id);
    return res.status(201).json(updatedProduct)
}
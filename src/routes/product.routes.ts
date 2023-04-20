import { Router } from 'express';
import { isOwner } from '../middlewares/isOwner.middleware';
import { authMiddleware } from '../middlewares/auth.middleware';
import { createProductController } from '../controllers/products/createProduct.controller';
import { updateProductController } from '../controllers/products/updateProduct.controller';
import { deleteProductController } from '../controllers/products/deleteProduct.controller';
import { readProductsController } from '../controllers/products/readProducts.controller';
import { getNameProductController } from '../controllers/products/getNameProduct.controller';
import { readIdProductController } from '../controllers/products/readIdProduct.controller';

const routes = Router();

export const productRoutes = () => {
    
  routes.post('', createProductController);
  routes.get('', readProductsController);
  routes.get('/:name', getNameProductController);
  routes.get('/:id', readIdProductController)
  routes.patch('/:id',authMiddleware,isOwner,updateProductController);
  routes.delete('/:id', authMiddleware, isOwner, deleteProductController);
  
  return routes;
};
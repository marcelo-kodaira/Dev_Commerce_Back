import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { createProductController } from '../controllers/products/createProduct.controller';
import { updateProductController } from '../controllers/products/updateProduct.controller';
import { deleteProductController } from '../controllers/products/deleteProduct.controller';
import { readProductsController } from '../controllers/products/readProducts.controller';
import { readNameProductController } from '../controllers/products/readNameProduct.controller';
import { readIdProductController } from '../controllers/products/readIdProduct.controller';
import isProductOwner from '../middlewares/isProductOwner.middleware';
import { prisma } from '../prisma';
import { readUserProductController } from '../controllers/products/readUserProducts.controller';

const routes = Router();

export const productRoutes = () => {
    
  routes.post('', authMiddleware, createProductController);

  routes.get('',authMiddleware, readProductsController);

  routes.get('/user',authMiddleware,readUserProductController)

  routes.get('/name/:name', authMiddleware, readNameProductController);

  routes.get('/id/:id', authMiddleware, readIdProductController)

  routes.patch('/:id',authMiddleware,isProductOwner(prisma.products),updateProductController);
  
  routes.delete('/:id', authMiddleware, isProductOwner(prisma.products), deleteProductController);
  
  return routes;
};
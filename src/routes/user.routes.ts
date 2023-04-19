import { Router } from 'express';
import { createUserController } from '../controllers/user/createUser.controller';
import { isOwner } from '../middlewares/isOwner.middleware';
import { updateUserController } from '../controllers/user/updateUser.controller';
import { deleteUserController } from '../controllers/user/deleteUser.controller';
import { authMiddleware } from '../middlewares/auth.middleware';


const routes = Router();

export const userRoutes = () => {
    
  routes.post('', createUserController);
  routes.patch('/:id',authMiddleware,isOwner,updateUserController);
  routes.delete('/:id', authMiddleware, isOwner, deleteUserController);

  return routes;
};
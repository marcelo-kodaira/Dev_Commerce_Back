import { Router } from 'express';
import { createUserController } from '../controllers/user/createUser.controller';
import { isOwnUser} from '../middlewares/isOwnUser.middleware';
import { updateUserController } from '../controllers/user/updateUser.controller';
import { deleteUserController } from '../controllers/user/deleteUser.controller';
import { authMiddleware } from '../middlewares/auth.middleware';


const routes = Router();

export const userRoutes = () => {
    
  routes.post('', createUserController);
  
  routes.patch('/:id',authMiddleware,isOwnUser,updateUserController);
  
  routes.delete('/:id', authMiddleware, isOwnUser, deleteUserController);

  return routes;
};
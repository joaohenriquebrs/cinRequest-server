import { Router } from 'express';
import UserController from '@controllers/UserController';

const userRouter = Router();


userRouter.route('/login').post(UserController.create);
userRouter.route('/').post(UserController.create);
userRouter.route('/refreshToken').post(UserController.create);

export default userRouter;
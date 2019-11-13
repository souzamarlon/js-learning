import { Router } from 'express';
// import multer from 'multer';
// import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.get('/users', UserController.index);

// routes.post('/users', UserController.store);

routes.use(authMiddleware);

export default routes;

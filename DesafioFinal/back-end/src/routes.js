import { Router } from 'express';
// import multer from 'multer';
// import multerConfig from './config/multer';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
// routes.get('/users', UserController.index);

routes.use(authMiddleware);
routes.post('/students', StudentController.store);

export default routes;

import { Router } from 'express';
// import multer from 'multer';
// import multerConfig from './config/multer';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import PlanController from './app/controllers/PlanController';
import MembershipController from './app/controllers/MembershipController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
// routes.get('/users', UserController.index);

routes.use(authMiddleware);
routes.post('/students', StudentController.store);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.post('/memberships/', MembershipController.store);

export default routes;

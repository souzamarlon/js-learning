import { Router } from 'express';
// import multer from 'multer';
// import multerConfig from './config/multer';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import PlanController from './app/controllers/PlanController';
import MembershipController from './app/controllers/MembershipController';
import CheckinController from './app/controllers/CheckinController';
import Help_orderController from './app/controllers/Help_orderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
// routes.get('/users', UserController.index);
routes.get('/students/:id', StudentController.index_mobile);

routes.get('/students/:id/checkins', CheckinController.index);
routes.post('/students/:id/checkins', CheckinController.store);

routes.get('/students/:id/help-orders', Help_orderController.index);
routes.post('/students/:id/help-orders', Help_orderController.store);

routes.use(authMiddleware);

routes.get('/students/', StudentController.index);

routes.post('/students', StudentController.store);
routes.delete('/students/:id', StudentController.delete);
routes.put('/students/:id', StudentController.update);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.get('/memberships/', MembershipController.index);
routes.post('/memberships/', MembershipController.store);
routes.put('/memberships/:id', MembershipController.update);
routes.delete('/memberships/:id', MembershipController.delete);

routes.get('/help-orders', Help_orderController.index);
routes.post('/help-orders/:id/answer', Help_orderController.update);

export default routes;

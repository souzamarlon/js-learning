import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import MeetupController from './app/controllers/MeetupController';
import SubscriberController from './app/controllers/SubscriberController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
// routes.get('/users', UserController.index);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
routes.post('/meetups', MeetupController.store);
routes.get('/meetups', MeetupController.index);
routes.put('/meetups', MeetupController.update);
routes.delete('/meetups/:id', MeetupController.delete);

routes.get('/subscribers', SubscriberController.index);
routes.post('/subscribers', SubscriberController.store);

export default routes;

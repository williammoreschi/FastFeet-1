import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import RecipientController from './app/controller/RecipientController';
import DeliveryController from './app/controller/DeliveryController';
import FileController from './app/controller/FileController';

import authMiddleware from './app/middleware/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

routes.use(authMiddleware);


routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

routes.put('/users', UserController.update);

routes.post('/deliverys', DeliveryController.store);
routes.get('/deliverys', DeliveryController.index);
routes.put('/deliverys/:id', DeliveryController.update);

/**
 * routes.put('/deliverys/:id', DeliveryController.update);
 * routes.delete('/deliverys/:id', DeliveryController.delete);
 */

 routes.post('/files', upload.single('file'), FileController.store);


export default routes;
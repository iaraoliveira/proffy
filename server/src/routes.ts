import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

const routes = express.Router();

routes.get('/classes', classesController.index);

routes.post('/classes', classesController.create);

routes.post('/connections', connectionsController.create);

routes.get('/connections', connectionsController.index);

export default routes;

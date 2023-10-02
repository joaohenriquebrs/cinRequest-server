import { Router } from 'express';
import RequestController from '@from/RequestController';

const requestRouter = Router();

// Rotas para manipulação de requisições
requestRouter.route('/').get(RequestController.readAll);
requestRouter.route('/:id').get(RequestController.readAll);
requestRouter.route('/').post(RequestController.post);
requestRouter.route('/').put(RequestController.evaluateRequisition);
requestRouter.route('/answer/:id').post(RequestController.)

export default requestRouter;
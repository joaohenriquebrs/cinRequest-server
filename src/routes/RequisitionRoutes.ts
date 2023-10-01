import { Router } from 'express';
import { RequisitionController } from '../controllers';

const requisitionRouter = Router();

// Rotas para manipulação de requisições
requisitionRouter.route('/').post(RequisitionController.create);
requisitionRouter.route('/:requisitionId/:status').put(RequisitionController.evaluateRequisition);
requisitionRouter.route('/studentId').get(RequisitionController.readAllByStudent);
requisitionRouter.route('/:requisitiontId').delete(RequisitionController.delete);
requisitionRouter.route('/').get(RequisitionController.readAll);

export default requisitionRouter;

import { Router } from 'express';
import { RequisitionController } from '../controllers';

const requisitionRouter = Router();

requisitionRouter.route('/').post(RequisitionController.create);

requisitionRouter.route('/:requisitionId/:status').put(RequisitionController.AvaliationRequisition);

requisitionRouter.route('/studentId').get(RequisitionController.readAllbyStudent);

requisitionRouter.route('/:requisitiontId').delete(RequisitionController.delete);

requisitionRouter.route('/').get(RequisitionController.readAll);

export default requisitionRouter;

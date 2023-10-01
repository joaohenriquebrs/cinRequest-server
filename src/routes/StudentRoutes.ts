import { Router } from 'express';
import { StudentController } from '../controllers';

const studentRouter = Router();

// Rotas relacionadas aos estudantes
studentRouter.route('/').post(StudentController.create);
studentRouter.route('/').get(StudentController.readAll);
studentRouter.route('/:studentId').get(StudentController.read);
studentRouter.route('/:studentId').patch(StudentController.update);
studentRouter.route('/:studentId').delete(StudentController.delete);

export default studentRouter;

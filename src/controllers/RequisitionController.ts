import { Request, Response, NextFunction } from 'express';
import { RequisitionRepository, StudentRepository } from '../repositories';

class RequisitionController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { sector, requisitionType, description, authorEmail } = req.body;

      const studentRepository = new StudentRepository();

      const checkstudent = await studentRepository.findByEmail(authorEmail);

      if (!checkstudent) {
        return next({
          status: 400,
          message: 'O estudante não existe!',
        });
      }

      const requisitionRepository = new RequisitionRepository();
      const requisition = await requisitionRepository.create({
        sector,
        requisitionType,
        description,
        author: { connect: { email: authorEmail } },
        response: 'Aguardando resposta',
        status: 'Aberto',
      });

      res.locals = {
        status: 201,
        message: 'Requisição criada com sucesso!',
        data: requisition,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAllbyStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const { studentId } = req.params;

      //   veirificar se o aluno existe
      const studentRepository = new StudentRepository();
      const student = await studentRepository.findById(studentId);
      if (!student) {
        return next({
          status: 404,
          message: 'Student not found',
        });
      }

      const requisitionRepository = new RequisitionRepository();
      const requisitions = await requisitionRepository.findAllByEmail(student.email);

      if (!requisitions) {
        return next({
          status: 404,
          message: 'Requisitions not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'Requisitions found',
        data: requisitions,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { requisitiontId } = req.params;

      const requisitionRepository = new RequisitionRepository();

      const requisition = await requisitionRepository.delete(requisitiontId);

      if (!requisition) {
        return next({
          status: 404,
          message: 'Requisition not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'Requition deleted',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const requisitionRepository = new RequisitionRepository();

      const requisitions = await requisitionRepository.findAll();

      res.locals = {
        status: 200,
        data: requisitions,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async AvaliationRequisition(req: Request, res: Response, next: NextFunction) {
    try {
      const { requisitionId, status } = req.params;

      const response = status === 'Aprovar' ? 'Aprovado' : 'Rejeitado';

      const requisitionRepository = new RequisitionRepository();

      const requisition = await requisitionRepository.update(requisitionId, {
        status: 'Fechado',
        response,
      });

      if (!requisition) {
        return next({
          status: 404,
          message: 'Requisition not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'Requisition avaliada',
        data: requisition,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new RequisitionController();

import { Request, Response, NextFunction } from 'express';
import { RequisitionRepository, StudentRepository } from '../repositories';

class RequisitionController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { sector, requisitionType, description, authorEmail } = req.body;

      // Criar uma instância do repositório de estudantes
      const studentRepository = new StudentRepository();

      // Verificar se o estudante existe com base no e-mail
      const checkStudent = await studentRepository.findByEmail(authorEmail);

      if (!checkStudent) {
        return next({
          status: 400,
          message: 'O estudante não existe!',
        });
      }

      // Criar uma instância do repositório de requisições
      const requisitionRepository = new RequisitionRepository();

      // Criar a requisição
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

  async readAllByStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const { studentId } = req.params;

      // Verificar se o aluno existe com base no ID
      const studentRepository = new StudentRepository();
      const student = await studentRepository.findById(studentId);

      if (!student) {
        return next({
          status: 404,
          message: 'Estudante não encontrado',
        });
      }

      // Criar uma instância do repositório de requisições
      const requisitionRepository = new RequisitionRepository();

      // Encontrar todas as requisições do aluno com base no email do estudante
      const requisitions = await requisitionRepository.findAllByEmail(student.email);

      if (!requisitions) {
        return next({
          status: 404,
          message: 'Requisições não encontradas',
        });
      }

      res.locals = {
        status: 200,
        message: 'Requisições encontradas',
        data: requisitions,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { requisitionId } = req.params;

      // Criar uma instância do repositório de requisições
      const requisitionRepository = new RequisitionRepository();

      // Excluir a requisição com base no ID
      const requisition = await requisitionRepository.delete(requisitionId);

      if (!requisition) {
        return next({
          status: 404,
          message: 'Requisição não encontrada',
        });
      }

      res.locals = {
        status: 200,
        message: 'Requisição excluída',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      // Criar uma instância do repositório de requisições
      const requisitionRepository = new RequisitionRepository();

      // Encontrar todas as requisições
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

  async evaluateRequisition(req: Request, res: Response, next: NextFunction) {
    try {
      const { requisitionId, status } = req.params;

      // Determinar a resposta com base no status (Aprovar ou Rejeitar)
      const response = status === 'Aprovar' ? 'Aprovado' : 'Rejeitado';

      // Criar uma instância do repositório de requisições
      const requisitionRepository = new RequisitionRepository();

      // Atualizar o status da requisição para 'Fechado' e definir a resposta
      const requisition = await requisitionRepository.update(requisitionId, {
        status: 'Fechado',
        response,
      });

      if (!requisition) {
        return next({
          status: 404,
          message: 'Requisição não encontrada',
        });
      }

      res.locals = {
        status: 200,
        message: 'Requisição avaliada',
        data: requisition,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new RequisitionController();

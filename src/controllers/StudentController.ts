import { Request, Response, NextFunction } from 'express';
import { StudentRepository } from '../repositories';
import { Student } from '../DTOs';

class StudentController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const studentData = req.body;

      // Criar uma instância do repositório de estudantes
      const studentRepository = new StudentRepository();

      // Validar e parsear os dados do estudante usando o DTO Student
      const validatedData = Student.parse(studentData);

      // Verificar se o email já está registrado
      const checkEmail = await studentRepository.findByEmail(validatedData.email);

      if (checkEmail) {
        return next({
          status: 400,
          message: 'Este email já está registrado',
        });
      }

      // Criar o estudante
      const student = await studentRepository.create(validatedData);

      res.locals = {
        status: 201,
        message: 'Estudante criado',
        data: student,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { studentId } = req.params;

      // Criar uma instância do repositório de estudantes
      const studentRepository = new StudentRepository();

      // Encontrar o estudante por ID
      const student = await studentRepository.findById(studentId);

      if (!student) {
        return next({
          status: 404,
          message: 'Estudante não encontrado',
        });
      }

      res.locals = {
        status: 200,
        data: student,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { studentId } = req.params;
      const newStudent = req.body;

      // Criar uma instância do repositório de estudantes
      const studentRepository = new StudentRepository();

      // Atualizar o estudante com base no ID
      const student = await studentRepository.update(studentId, newStudent);

      if (!student) {
        return next({
          status: 404,
          message: 'Estudante não encontrado',
        });
      }

      res.locals = {
        status: 200,
        data: student,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { studentId } = req.params;

      // Criar uma instância do repositório de estudantes
      const studentRepository = new StudentRepository();

      // Excluir o estudante com base no ID
      const student = await studentRepository.delete(studentId);

      if (!student) {
        return next({
          status: 404,
          message: 'Estudante não encontrado',
        });
      }

      res.locals = {
        status: 200,
        message: 'Estudante excluído',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      // Criar uma instância do repositório de estudantes
      const studentRepository = new StudentRepository();

      // Encontrar todos os estudantes
      const students = await studentRepository.findAll();

      res.locals = {
        status: 200,
        data: students,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new StudentController();

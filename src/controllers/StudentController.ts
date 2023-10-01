import { Request, Response, NextFunction } from 'express';
import { StudentRepository } from '../repositories';
import { Student } from '../DTOs';

class StudentController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const studentData = req.body;

      const studentRepository = new StudentRepository();

      const validatedData = Student.parse(studentData);

      const checkEmail = await studentRepository.findByEmail(
        validatedData.email,
      );

      if (checkEmail) {
        return next({
          status: 400,
          message: 'This email is already registred',
        });
      }

      const student = await studentRepository.create(validatedData);

      res.locals = {
        status: 201,
        message: 'Student created',
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

      const studentRepository = new StudentRepository();

      const student = await studentRepository.findById(studentId);

      if (!student) {
        return next({
          status: 404,
          message: 'Student not found',
        });
      }

      res.locals = {
        status: 200,
        data: Student,
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

      const studentRepository = new StudentRepository();

      const student = await studentRepository.update(studentId, newStudent);

      if (!student) {
        return next({
          status: 404,
          message: 'Student not found',
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

      const studentRepository = new StudentRepository();

      const student = await studentRepository.delete(studentId);

      if (!student) {
        return next({
          status: 404,
          message: 'Student not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'Student deleted',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const studentRepository = new StudentRepository();

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

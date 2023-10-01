import prisma from '@database/client';
import { Prisma, Student } from '@prisma/client';

export class StudentRepository {
  // Método para criar um novo estudante.
  async create(data: Prisma.StudentCreateInput): Promise<Student> {
    const student = await prisma.student.create({ data });
    return student;
  }

  // Método para encontrar um estudante pelo email.
  async findByEmail(email: string): Promise<Student | null> {
    const student = await prisma.student.findUnique({ where: { email } });
    return student;
  }

  // Método para encontrar um estudante pelo ID.
  async findById(id: string): Promise<Student | null> {
    const student = await prisma.student.findUnique({ where: { id } });
    return student;
  }

  // Método para atualizar os dados de um estudante por ID.
  async update(id: string, data: Prisma.StudentUpdateInput): Promise<Student> {
    const student = await prisma.student.update({ where: { id }, data });
    return student;
  }

  // Método para excluir um estudante por ID.
  async delete(id: string): Promise<Student> {
    const student = await prisma.student.delete({ where: { id } });
    return student;
  }

  // Método para encontrar todos os estudantes.
  async findAll(): Promise<Student[]> {
    const students = await prisma.student.findMany();
    return students;
  }
}

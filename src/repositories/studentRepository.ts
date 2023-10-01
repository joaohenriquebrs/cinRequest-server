import prisma from '@database/client';
import { Prisma, Student } from '@prisma/client';

export class StudentRepository {
  async create(data: Prisma.StudentCreateInput): Promise<Student> {
    const student = await prisma.student.create({ data });
    return student;
  }

  async findByEmail(email: string): Promise<Student | null> {
    const student = await prisma.student.findUnique({ where: { email } });
    return student;
  }

  async findById(id: string): Promise<Student | null> {
    const student = await prisma.student.findUnique({ where: { id } });
    return student;
  }

  async update(id: string, data: Prisma.StudentUpdateInput): Promise<Student> {
    const student = await prisma.student.update({ where: { id }, data });
    return student;
  }

  async delete(id: string): Promise<Student> {
    const student = await prisma.student.delete({ where: { id } });
    return student;
  }

  async findAll(): Promise<Student[]> {
    const students = await prisma.student.findMany();
    return students;
  }
}

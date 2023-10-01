import prisma from '@database/client';
import { Prisma, Requisition } from '@prisma/client';

export class RequisitionRepository {
  // Método para criar uma nova requisição.
  async create(data: Prisma.RequisitionCreateInput): Promise<Requisition> {
    const requisition = await prisma.requisition.create({ data });
    return requisition;
  }

  // Método para atualizar uma requisição existente por ID.
  async update(
    id: string,
    data: Prisma.RequisitionUpdateInput,
  ): Promise<Requisition> {
    const requisition = await prisma.requisition.update({
      where: { id },
      data,
    });
    return requisition;
  }

  // Método para excluir uma requisição existente por ID.
  async delete(id: string): Promise<Requisition> {
    const requisition = await prisma.requisition.delete({ where: { id } });
    return requisition;
  }

  // Método para encontrar todas as requisições de um autor específico por email.
  async findAllByEmail(authorEmail: string): Promise<Requisition[]> {
    const requisitions = await prisma.requisition.findMany({
      where: { authorEmail },
    });
    return requisitions;
  }

  // Método para encontrar todas as requisições.
  async findAll(): Promise<Requisition[]> {
    const requisitions = await prisma.requisition.findMany();
    return requisitions;
  }
}

import prisma from '@database/client';
import { Prisma, Requisition } from '@prisma/client';

export class RequisitionRepository {
  async create(data: Prisma.RequisitionCreateInput): Promise<Requisition> {
    const requisition = await prisma.requisition.create({ data });
    return requisition;
  }

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

  async delete(id: string): Promise<Requisition> {
    const requisition = await prisma.requisition.delete({ where: { id } });
    return requisition;
  }

  async findAllByEmail(authorEmail: string): Promise<Requisition[]> {
    const requisitions = await prisma.requisition.findMany({
      where: { authorEmail },
    });
    return requisitions;
  }

  async findAll(): Promise<Requisition[]> {
    const requisitions = await prisma.requisition.findMany();
    return requisitions;
  }  

  
}

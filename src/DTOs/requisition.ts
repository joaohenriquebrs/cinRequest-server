import { z } from 'zod';

export const Requisition = z.object({
    studentId: z.string().nonempty({ message: 'O id do estudante é obrigatório' }),
    sector: z.string().nonempty({ message: 'O setor é obrigatório' }),
    RequisitionType: z.string().nonempty({ message: 'O tipo de requisição é obrigatório' }),
    description: z.string().nonempty({ message: 'A descrição é obrigatória' }),
    authorEmail: z.string(),
});
  

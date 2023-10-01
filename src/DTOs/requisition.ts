import { z } from 'zod';

export const Requisition = z.object({
    studentId: z.string().nonempty({ message: 'O campo do estudante é obrigatório' }),
    sector: z.string().nonempty({ message: 'O campo do setor é obrigatório' }),
    RequisitionType: z.string().nonempty({ message: 'O campo do tipo de requisição é obrigatório' }),
    description: z.string().nonempty({ message: 'O campo da descrição é obrigatório' }),
    authorEmail: z.string(),
});

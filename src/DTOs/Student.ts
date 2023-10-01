import { z } from 'zod';

export const Student = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, { message: 'O nome deve conter apenas letras' })
    .nonempty({ message: 'O nome não pode ser vazio' }),
  registration: z
    .string()
    .nonempty({ message: 'A matrícula não pode ser vazia' }),
  email: z.string().email({ message: 'Endereço de email inválido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),
});

export const StudentUpdate = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, { message: 'O nome deve conter apenas letras' })
    .nonempty({ message: 'O nome não pode ser vazio' })
    .optional(),
  email: z.string().email({ message: 'Endereço de email inválido' }).optional(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .optional(),
});

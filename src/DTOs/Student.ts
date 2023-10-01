import { z } from 'zod';

export const Student = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, { message: 'O nome deve conter apenas letras' })
    .nonempty({ message: 'Nome é obrigatório' }),
  registration: z
    .string()
    .nonempty({ message: 'A matrícula é obrigatória' }),
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),
});

export const StudentUpdate = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, { message: 'O nome deve conter apenas letras' })
    .nonempty({ message: 'Nome é obrigatório' })
    .optional(),
  email: z.string().email({ message: 'Email inválido' }).optional(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .optional(),
});

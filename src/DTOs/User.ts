import { z } from 'zod';

export const User = z.object({
    name: z.string()
        .regex(/^[A-Z][a-z]+( [A-Z][a-z]+)*$/, { message: 'O nome deve conter apenas letras' })
        .length(255, { message: 'Tamanho de nome máximo excedido' })
        .nonempty({ message: 'O nome não pode ser vazio' }),
    phone: z.string()
        .regex(/^\d{11}$/, { message: 'O número de telefone deve conter apenas números' })
        .length(20, { message: 'Tamanho de telefone máximo excedido' })
        .nonempty(),
    email: z.string()
        .email({ message: 'Endereço de email inválido' })
        .length(255, { message: 'Tamanho do email máximo excedido' }),
    password: z.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
        .length(255, { message: 'Tamanho da senha máximo excedido' }),
    cpf: z.string().regex(/^\d{11}$/, { message: 'O cpf deve conter apenas números' })
        .length(11, { message: 'Tamanho do cpf máximo excedido' })
        .nonempty({ message: 'O cpf não pode ser vazio' })
});

export const UpdateUser = z.object({
    name: z.string()
        .regex(/^[A-Z][a-z]+( [A-Z][a-z]+)*$/, { message: 'O nome deve conter apenas letras' })
        .length(255, { message: 'Tamanho de nome máximo excedido' }).optional(),
    phone: z.string()
        .regex(/^\d{11}$/, { message: 'O número de telefone deve conter apenas números' })
        .length(20, { message: 'Tamanho de telefone máximo excedido' }).optional(),
    email: z.string()
        .email({ message: 'Endereço de email inválido' })
        .length(255, { message: 'Tamanho do email máximo excedido' }).optional(),
    password: z.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
        .length(255, { message: 'Tamanho da senha máximo excedido' }).optional(),
    oldPassword: z.string().length(255, { message: 'Tamanho da senha máximo excedido' }).optional(),
    status: z.string()
        .regex(/^(INACTIVE|ACTIVE)$/, { message: 'O status deve ser ativo ou inativo' })
        .length(255, { message: 'Tamanho do status máximo excedido' }).nonempty({ message: 'O status do usuário é obrigatório' })
});


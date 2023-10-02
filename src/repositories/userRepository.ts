import { Prisma, StatusEnum, User } from '@prisma/client';
import prisma from '@database/client';

class userRepository {
    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = await prisma.user.create({ data });
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { email } });
        return user;
    }

    async existUserByCpf(cpf: string): Promise<Boolean> {
        const countUser = await prisma.user.count({ where: { cpf } });
        return countUser > 0;
    }

    async findById(id: number): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { id } });
        return user;
    }

    async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        const user = await prisma.user.update({ where: { id }, data });
        return user;
    }

    async inactive(id: number): Promise<User> {
        const user = await prisma.user.update({ where: { id }, data: { status: StatusEnum.INACTIVE } });
        return user;
    }

    async active(id: number): Promise<User> {
        const user = await prisma.user.update({ where: { id }, data: { status: StatusEnum.ACTIVE } });
        return user;
    }

    async findAllPaginated(limit: number, page: number, orderBy: any, search: string): Promise<User[]> {
        return await prisma.user.findMany({
            orderBy,
            skip: limit * (page - 1),
            take: limit,
            ...(search && {
                where: {

                    OR: [
                        {
                            name: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        },
                        {
                            cpf: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        },
                        {
                            phone: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        },
                        {
                            email: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            })

        });
    }

    async countAllPaginated(search: string): Promise<Number> {
        return await prisma.user.count({
            ...(search && {
                where: {
                    OR: [
                        {
                            name: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        },
                        {
                            cpf: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        },
                        {
                            phone: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        },
                        {
                            email: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            })
        });
    }
}

export default new userRepository();
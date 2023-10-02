import { Request, Response, NextFunction } from 'express';
import { hash, compare } from 'bcryptjs';
import { UpdateUser, User } from '@DTOs/User';
import UserRepository from '@repositories/userRepository';
import { randomUUID } from 'crypto';
import { Prisma, RoleEnum, StatusEnum } from '@prisma/client';

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userRequest = User.parse(req.body);

      const existsUserWithEmail = await UserRepository.findByEmail(
        userRequest.email,
      );

      if (existsUserWithEmail) {
        return next({
          status: 400,
          message: 'This email is already registred',
        });
      }

      const existUserByCpf = await UserRepository.existUserByCpf(
        userRequest.cpf,
      );

      if (existUserByCpf) {
        return next({
          status: 400,
          message: 'This cpf is already registred',
        });
      }

      const userData: Prisma.UserCreateInput = {
        password: await hash(userRequest.password, 6),
        cpf: userRequest.cpf,
        email: userRequest.email,
        name: userRequest.name,
        phone: userRequest.phone,
        refreshToken: randomUUID(),
        status: StatusEnum.ACTIVE,
        role: RoleEnum.USER,
      };

      await UserRepository.create(userData);

      res.locals = {
        status: 201,
        message: 'User created'
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const user = await UserRepository.findById(Number(userId));

      if (!user) {
        return next({
          status: 404,
          message: 'User not found',
        });
      }

      res.locals = {
        status: 200,
        data: user,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findAllPaginated(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit = 10, page = 1, orderBy = 'id', order = 'desc', search } = req.params;
      const settingOrderData = (typeOrder: string, key: 'id' | 'cpf' | 'phone' | 'email') => {
        if (key === 'id') return { id: typeOrder };
        if (key === 'cpf') return { cpf: typeOrder };
        if (key === 'phone') return { phone: typeOrder };
        if (key === 'email') return { email: typeOrder };
        throw new Error("Invalid key provided");
      }

      if (orderBy != 'id' && orderBy != 'cpf' && orderBy != 'phone' && orderBy != 'email') {
        return next(
          {
            status: 400,
            message: 'OrderBy inválido'
          }
        )
      }
      const orderByPrisma = settingOrderData(order, orderBy)

      const users = await UserRepository.findAllPaginated(Number(limit), Number(page), orderByPrisma, search);

      const countUsers = await UserRepository.countAllPaginated(search);

      res.locals = {
        status: 200,
        data: users,
        count: countUsers
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const userRequest = UpdateUser.parse(req.body);
      let userData: Prisma.UserUpdateInput = { status: userRequest.status as StatusEnum }

      if (userRequest.email) {
        userData.email = userRequest.email
      }

      if (userRequest.phone) {
        userData.phone = userRequest.phone
      }

      if (userRequest.name) {
        userData.name = userRequest.name
      }

      if (userRequest.password && userRequest.oldPassword) {
        const user = await UserRepository.findById(Number(userId))
        if (user) {
          const userPassword = user.password
          const isTheSame = await compare(userRequest.oldPassword, userPassword)
          if (isTheSame) {
            userData.password = userRequest.password
          } else {
            return next({
              status: 400,
              message: 'Wrong password confirmation'
            })
          }
        } else {
          return next({
            status: 404,
            message: 'User not found',
          });
        }
      }


      const user = await UserRepository.update(Number(userId), userData);

      if (!user) {
        return next({
          status: 404,
          message: 'User not found',
        });
      }

      res.locals = {
        status: 200,
        data: user,
        message: 'User updated',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async inactive(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const user = await UserRepository.inactive(Number(userId));

      if (!user) {
        return next({
          status: 404,
          message: 'User not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'User deleted',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async active(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const user = await UserRepository.active(Number(userId));

      if (!user) {
        return next({
          status: 404,
          message: 'User not found',
        });
      }

      res.locals = {
        status: 200,
        message: 'User reactivated',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserController();
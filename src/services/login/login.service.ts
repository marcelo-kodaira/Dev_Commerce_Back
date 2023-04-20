import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from '../../prisma';
import ErrorHttp from '../../error/Error';
import { ILoginRequest } from '../../interfaces/user';

export const loginService = async ({ email, password }: ILoginRequest) => {
  const account = await prisma.users.findUnique({
    where: {
      email,
    }
  });

  if (!account) {
    throw new ErrorHttp('Wrong email or password', 403);
  }

  const passwordMatch = bcrypt.compareSync(password, account.password);

  if (!passwordMatch) {
    throw new ErrorHttp('Wrong email or password', 403);
  }

  const token = jwt.sign(
    { id: account.id, },
    process.env.SECRET_KEY as string,
    {
      expiresIn: '1d',
    }
  );

  const { password: pwd, ...rest } = account;

  return { token, rest };
};
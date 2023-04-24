import { Request, Response, NextFunction } from 'express';

const isProductOwner = (model: any) => async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const product = await model.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado.' });
  }

  if (product.user.id !== userId) {
    return res.status(403).json({ message: 'Não autorizado' });
  }

  next();
};

export default isProductOwner;
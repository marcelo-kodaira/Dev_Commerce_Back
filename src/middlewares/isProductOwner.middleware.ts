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
    return res.status(404).json({ message: 'Product not found!' });
  }

  if (product.user.id !== userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};

export default isProductOwner;
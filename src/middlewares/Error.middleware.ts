import { NextFunction, Request, Response } from 'express';
import ErrorHttp from '../error/Error';


const handleErrorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {

  if (error instanceof ErrorHttp) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: 'Internal server error.',
  });

};

export default handleErrorMiddleware;
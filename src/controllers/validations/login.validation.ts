import * as Yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import Validate from './index';

export default async (req: Request, res: Response, next: NextFunction) => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('User email is required'),
    password: Yup.string().required('User password is required'),
  });

  const { error, valid } = await Validate(schema, req.body);

  if (!valid) {
    return res.status(400).json({ error });
  }

  return next();
};

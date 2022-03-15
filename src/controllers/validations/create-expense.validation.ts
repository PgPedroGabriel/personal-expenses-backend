import * as Yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import Validate from './index';

export default async (req: Request, res: Response, next: NextFunction) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Expense name is required'),
    day: Yup.number().required('Day number is required').min(1).max(31),
    amount: Yup.number().required('Amount is requried').min(1, 'minimal value should be 1 USD'),
    payed: Yup.boolean().default(false),
    category_id: Yup.string().required('Category id is required'),
    recurrent: Yup.boolean().default(false),
  });

  const { error, valid } = await Validate(schema, req.body);

  if (!valid) {
    return res.status(400).json({ error });
  }

  return next();
};

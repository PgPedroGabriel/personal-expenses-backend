import { Request, Response } from 'express';
import { ExpenseService } from '../services';

class ExpenseController {
  static async create(req: Request, res: Response) {
    try {
      const expense = await ExpenseService.create({ ...req.body, user_id: req.user.id });
      return res.json({ status: true, data: expense });
    } catch (err: any) {
      return res.status(400).json({ error: { message: err.message } });
    }
  }

  static async getAll(req:Request, res: Response) {
    const expenses = await ExpenseService.findAll(req.user.id);
    return res.json({ status: true, data: expenses });
  }
}

export default ExpenseController;

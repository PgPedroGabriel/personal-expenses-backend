import { Request, Response } from 'express';
import { CategoryService } from '../services';

class CategoryController {
  static async create(req: Request, res: Response) {
    try {
      const category = await CategoryService.create({ ...req.body, user_id: req.user.id });
      return res.json({ status: true, data: category });
    } catch (err: any) {
      return res.status(400).json({ error: { message: err.message } });
    }
  }

  static async getAll(req:Request, res: Response) {
    const categories = await CategoryService.findAll(req.user.id);
    return res.json({ status: true, data: categories });
  }
}

export default CategoryController;

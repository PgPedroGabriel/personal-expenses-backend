import { Request, Response } from 'express';
import { UserService } from '../services';

class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { token } = await UserService.create(req.body);
      return res.json({ status: true, data: token });
    } catch (err: any) {
      return res.status(400).json({ error: { message: err.message } });
    }
  }
}

export default UserController;

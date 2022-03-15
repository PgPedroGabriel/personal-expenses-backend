import { Request, Response } from 'express';
import { AuthService } from '../services';

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const token = await AuthService.doLogin(req.body.email, req.body.password);
      return res.json({ status: true, data: token });
    } catch (err: any) {
      return res.status(400).json({ error: { message: err.message } });
    }
  }
}

export default AuthController;

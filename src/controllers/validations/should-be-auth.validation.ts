import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../../services';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authentication } = req.headers;

  if (!authentication) {
    return res.status(401).json({ error: 'Unauthenticated' });
  }

  const user = await AuthService.checkToken(authentication as string);

  if (!user) {
    return res.status(401).json({ error: 'Unauthenticated' });
  }

  req.user = user;

  return next();
};

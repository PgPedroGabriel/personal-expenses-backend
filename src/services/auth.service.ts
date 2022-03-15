import jwt from 'jsonwebtoken';
import { User } from '../models';
import { UserRepository } from '../repositories';

class AuthService {
  static async doLogin(email: string, password: string) {
    const user = await UserRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect login information');
    }

    const verified = await user.verifyPassword(password);

    if (!verified) {
      throw new Error('Incorrect login information');
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET || 'secret',
      {
        expiresIn: process.env.JWT_EXPIRATION || '7d',
      },
    );

    return token;
  }

  static async checkToken(token: string): Promise<User | null> {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as User;
      if (!decoded) { return null; }

      const user = await UserRepository.findByEmail(decoded.email);
      if (!user) { return null; }

      return user;
    } catch (err) {
      return null;
    }
  }
}

export default AuthService;

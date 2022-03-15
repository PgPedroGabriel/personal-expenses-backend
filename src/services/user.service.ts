import { AuthService } from '.';
import { UserRepository, ICreateUser } from '../repositories';

class UserService {
  static async create(params: ICreateUser) {
    const { email } = params;

    const exists = await UserRepository.findByEmail(email);

    if (exists) {
      throw new Error('User already exists');
    }

    const user = await UserRepository.create(params);
    const token = await AuthService.doLogin(params.email, params.password);

    return { user, token };
  }
}

export default UserService;

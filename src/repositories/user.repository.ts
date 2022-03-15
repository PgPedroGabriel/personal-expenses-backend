import { User } from '../models';

export interface ICreateUser {
 name: string;
 email: string;
 password: string;
}

class UserRepository {
  static users: Array<User> = [];

  static async findByEmail(email: string) : Promise<User | undefined> {
    return this.users
      .find((user: User) => user.email.toLowerCase() === email.toLowerCase());
  }

  static async create(params: ICreateUser): Promise<User> {
    const user = new User();
    user.name = params.name;
    user.email = params.email.toLowerCase();

    await user.setPassword(params.password);
    this.users.push(user);

    return user;
  }
}

export default UserRepository;

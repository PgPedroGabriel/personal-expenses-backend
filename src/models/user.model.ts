import { v4 } from 'uuid';
import bcrypt from 'bcryptjs';

class User {
  id: string;

  name: string;

  email: string;

  password_hash?: string;

  created_at: Date;

  constructor() {
    this.id = v4();
    this.created_at = new Date();
  }

  async setPassword(password:string) {
    this.password_hash = await bcrypt.hash(password, 8);
  }

  async verifyPassword(password:string) {
    if (this.password_hash) {
      const verified = await bcrypt.compare(password, this.password_hash);
      return verified;
    }
    return false;
  }
}

export default User;

import { v4 } from 'uuid';

class Category {
  id: string;

  name: string;

  created_at: Date;

  user_id: string;

  constructor() {
    this.id = v4();
    this.created_at = new Date();
  }
}

export default Category;

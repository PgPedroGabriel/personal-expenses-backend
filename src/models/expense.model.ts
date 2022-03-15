import { v4 } from 'uuid';

class Expense {
  id: string;

  name: string;

  day: number;

  amount: number;

  payed: boolean;

  category_id: number;

  recurrent: boolean;

  created_at: Date;

  user_id: string;

  constructor() {
    this.id = v4();
    this.created_at = new Date();
  }
}

export default Expense;

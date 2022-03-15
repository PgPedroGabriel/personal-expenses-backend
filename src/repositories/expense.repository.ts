import { Expense } from '../models';

export interface ICreateExpense {
 name: string;
 day: number;
 amount: number;
 payed: boolean;
 category_id: string;
 recurrent: boolean;
 user_id: string;
}

class ExpenseRepository {
  static expenses:Array<Expense> = [];

  static async findAll(user_id: string): Promise<Array<Expense>> {
    return this.expenses.filter((expense) => expense.user_id === user_id);
  }

  static async create(params: ICreateExpense): Promise<Expense> {
    const expense = new Expense();
    Object.assign(expense, {
      ...params,
    });

    this.expenses.push(expense);

    return expense;
  }
}

export default ExpenseRepository;

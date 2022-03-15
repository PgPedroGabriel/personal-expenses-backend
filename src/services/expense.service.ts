import { ExpenseRepository, CategoryRepository, ICreateExpense } from '../repositories';

class ExpenseService {
  static async create(params: ICreateExpense) {
    const { category_id } = params;

    const category = await CategoryRepository.findById(category_id);

    if (!category) {
      throw new Error('Invalid category');
    }

    const expense = await ExpenseRepository.create(params);
    return expense;
  }

  static async findAll(user_id: string) {
    const expenses = await ExpenseRepository.findAll(user_id);
    return expenses;
  }
}

export default ExpenseService;

import { Category } from '../models';

export interface ICreateCategory {
 name: string;
 user_id: string;
}

class ExpenseRepository {
  static categories:Array<Category> = [];

  static async findAll(user_id: string): Promise<Array<Category>> {
    return this.categories.filter((category) => category.user_id === user_id);
  }

  static async findById(uuid: string): Promise<Category | undefined> {
    return this.categories.find((category: Category) => category.id === uuid);
  }

  static async findByName(name: string, user_id: string) : Promise<Category | undefined> {
    return this.categories
      .find(
        (category) => category.name.toLowerCase() === name.toLowerCase() && category.user_id === user_id,
      );
  }

  static async create(params: ICreateCategory): Promise<Category> {
    const category = new Category();
    Object.assign(category, {
      ...params,
    });

    this.categories.push(category);

    return category;
  }
}

export default ExpenseRepository;

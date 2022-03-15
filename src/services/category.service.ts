import { CategoryRepository, ICreateCategory } from '../repositories';

class CategoryService {
  static async create(params: ICreateCategory) {
    const { name, user_id } = params;

    const exists = await CategoryRepository.findByName(name, user_id);

    if (exists) {
      throw new Error('Category exists');
    }

    const category = await CategoryRepository.create(params);
    return category;
  }

  static async findAll(user_id: string) {
    const categories = await CategoryRepository.findAll(user_id);
    return categories;
  }
}

export default CategoryService;

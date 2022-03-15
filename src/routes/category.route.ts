import { Router } from 'express';
import { CreateCategoryValidation } from '../controllers/validations';
import { CategoryController } from '../controllers';

class CategoryRoutes {
  static fill(routes: Router) {
    routes.post('/categories', CreateCategoryValidation, CategoryController.create);
    routes.get('/categories', CategoryController.getAll);
  }
}

export default CategoryRoutes;

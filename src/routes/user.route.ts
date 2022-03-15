import { Router } from 'express';
import { CreateUserValidation } from '../controllers/validations';
import { UserController } from '../controllers';

class CategoryRoutes {
  static fill(routes: Router) {
    routes.post('/user', CreateUserValidation, UserController.create);
  }
}

export default CategoryRoutes;

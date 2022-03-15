import { Router } from 'express';
import { LoginValidation } from '../controllers/validations';
import { AuthController } from '../controllers';

class AuthRoutes {
  static fill(routes: Router) {
    routes.post('/auth', LoginValidation, AuthController.login);
  }
}

export default AuthRoutes;

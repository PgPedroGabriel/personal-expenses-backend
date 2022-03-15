import { Router } from 'express';
import { CreateExpenseValidation } from '../controllers/validations';
import { ExpenseController } from '../controllers';

class ExpenseRoutes {
  static fill(routes: Router) {
    routes.post('/expenses', CreateExpenseValidation, ExpenseController.create);
    routes.get('/expenses', ExpenseController.getAll);
  }
}

export default ExpenseRoutes;

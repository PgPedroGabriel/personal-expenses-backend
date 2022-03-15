import { Router } from 'express';
import { ShouldBeAuthenticated } from '../controllers/validations';
import ExpenseRoutes from './expense.route';
import CategoryRoutes from './category.route';
import UserRoutes from './user.route';
import AuthRoutes from './auth.route';

const routes = Router();

AuthRoutes.fill(routes);
UserRoutes.fill(routes);

routes.use(ShouldBeAuthenticated);

ExpenseRoutes.fill(routes);
CategoryRoutes.fill(routes);

export default routes;

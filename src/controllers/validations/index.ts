import { AnySchema } from 'yup';
import CreateExpenseValidation from './create-expense.validation';
import CreateCategoryValidation from './create-category.validation';
import CreateUserValidation from './create-user.validation';
import LoginValidation from './login.validation';
import ShouldBeAuthenticated from './should-be-auth.validation';

export default async (schema: AnySchema, params: Object) => {
  let error = null;
  const valid = await schema.validate(params).catch((e) => {
    error = {
      message: e.message,
      field: e.path,
    };
  });

  return { error, valid };
};

export {
  CreateExpenseValidation,
  CreateCategoryValidation,
  CreateUserValidation,
  LoginValidation,
  ShouldBeAuthenticated,
};

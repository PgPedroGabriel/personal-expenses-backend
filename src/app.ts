import express, {
  Express, Request, Response,
} from 'express';
import './database';
import Youch from 'youch';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import routes from './routes';

class App {
  server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.handleErrors();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.static(path.join(process.cwd(), 'public')));
  }

  routes() {
    this.server.use(routes);
  }

  handleErrors() {
    this.server.use(async (err: Error, req: Request, res: Response) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Erro interno' });
    });
  }
}

export default new App().server;

import express from 'express';
import { connectDb } from './connectDb.js';
import { CreateUser } from './controller/userController.js';

const app = express();
app.use(express.json());

const port = 8090;

const UserRouter = express.Router();

UserRouter.post('/users', CreateUser);

app.use('/', UserRouter);

const server = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

server();

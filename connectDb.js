import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

export const connectDb = () => {
  try {
    mongoose
      .connect(process.env.MONGOOSE_URI)
      .then(() => console.log('database connected'));
  } catch (error) {
    console.log(error);
  }
};

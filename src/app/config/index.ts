import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  mongo_url: process.env.MONGO_URL,
  port: process.env.PORT,
  password: process.env.PASSWORD,
};

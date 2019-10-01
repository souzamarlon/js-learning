import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NOD_ENV === 'test' ? '.env.test' : '.env',
});

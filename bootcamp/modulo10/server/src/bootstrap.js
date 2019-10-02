// import dotenv from 'dotenv';
// const {dontenv} = require('dotenv').config({ ... });
const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NOD_ENV === 'test' ? '.env.test' : '.env',
});

// import dotenv from 'dotenv';
// const {dotenv} = require('dotenv').config({ ... });
// const dotenv = require('dotenv');

const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

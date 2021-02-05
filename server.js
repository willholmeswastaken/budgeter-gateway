const path = require('path');
const gateway = require('express-gateway');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

gateway()
  .load(path.join(__dirname, 'config'))
  .run();

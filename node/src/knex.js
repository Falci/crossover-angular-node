require('dotenv').load();
let knexfile = require('../knexfile'),
  env = process.env.ENV || 'development',
  config = knexfile[env];

module.exports = require('knex')(config);

'use strict';

let knex = require('../knex');

class ProductDao {

  findAll() {
    return knex.select('*').from('products');
  }
}

module.exports = ProductDao;

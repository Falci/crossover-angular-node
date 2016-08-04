/*eslint quote-props: [0, "always"]*/
'use strict';

let knex = require('../knex'),
  q = require('q'),
  ProductDao = require('./product'),
  productDao = new ProductDao();

class InventoryDao {

  constructor() {
    this.q = q;
  }

  initialize(user) {
    return productDao.findAll()
      .then(products => {
        let promises = products
          .map(product => this.initializeItem(user, product));

        return this.q.all(promises);
      });
  }

  initializeItem(user, product) {
    return knex('inventory').insert({
      'user_id': user.id,
      'product_id': product.id,
      quant: product.initial
    });
  }
}

module.exports = InventoryDao;

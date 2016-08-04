'use strict';

let knex = require('../knex'),
  knexnest = require('knexnest'),
  q = require('q'),
  InventoryDao = require('./inventory'),
  inventoryDao = new InventoryDao();

class UserDao {

  constructor() {
    this.q = q;
  }

  findOrCreate(username) {
    return this.find(username)
      .catch(() => {
        return this.create(username)
          .then(() => this.find(username));
      });
  }

  find(username) {
    let resultSet = knex.select(
          'u.id as _id',
          'u.username as _username',
          'u.coins as _coins',
          'p.id as _inventory__id',
          'p.name as _inventory__name',
          'p.icon as _inventory__icon',
          'i.quant as _inventory__quant'
        )
        .from('users AS u')
        .where('u.username', username)
        .leftJoin('inventory AS i', 'i.user_id', 'u.id')
        .leftJoin('products AS p', 'i.product_id', 'p.id')
        .orderBy('p.name', 'asc');

    return knexnest(resultSet)
      .then(result => {
        if(!result || !result.length) return this.q.reject();

        return result.pop();
      });
  }

  create(username) {
    return knex('users')
      .returning('*')
      .insert({username: username})
      .then(users => inventoryDao.initialize(users.pop()));
  }
}

module.exports = UserDao;

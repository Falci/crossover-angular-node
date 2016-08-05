/*eslint quote-props: 0*/
'use strict';

let knex = require('../knex'),
  knexnest = require('knexnest');

class auctionDao {

  list() {
    let resultSet = knex.select(
      'a.id as _id',
      'a.bid as _bid',
      'p.name as _product_name',
      'p.icon as _product_icon',
      'u.id as _user_id',
      'u.username as _user_username',
      'a.finish_at as _finish'
    )
    .from('auctions as a')
    .join('products as p', 'p.id', 'a.product_id')
    .join('users as u', 'u.id', 'a.user_id')
    .whereNull('a.finish_at')
    .orWhere(
      knex.raw('a.finish_at > ?', new Date())
    );

    return knexnest(resultSet);
  }

  insert(data) {
    return knex('auctions')
      .returning('*')
      .insert(data)
      .then(resultSet => resultSet.pop());
  }

  updateTime(auction) {
    return knex('auctions')
      .where('id', auction.id)
      .update({
        'finish_at': new Date(auction.finish)
      });
  }

  remove(id) {
    return knex('auctions').where('id', id).del();
  }
}

module.exports = auctionDao;

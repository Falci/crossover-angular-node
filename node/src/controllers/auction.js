'use strict';

let HttpStatus = require('http-status-codes'),
  events = require('../events'),
  AuctionDao = require('../dao/auction'),
  auctionDao = new AuctionDao();

class AuctionController {

  insert(req, res) {
    let data = req.body; // TODO add a validation layer

    /*eslint camelcase: 0*/
    data.user_id = data.user.id;
    data.product_id = data.product.id;

    delete data.user;
    delete data.product;

    return auctionDao.insert(data)
      .then(result => {
        res.status(HttpStatus.CREATED).json(result);

        events.emit('auction:changed');
      })
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  }

  remove(req, res) {
    return auctionDao.remove(req.params.id)
      .then(() => {
        res.status(HttpStatus.NO_CONTENT).end();

        events.emit('auction:changed');
      })
      .catch(err => res.status(HttpStatus.BAD_REQUEST).json(err));
  }

}

module.exports = AuctionController;

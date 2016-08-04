const emitter = require('./events'),
  AuctionDao = require('./dao/auction'),
  auctionDao = new AuctionDao();

class AuctionEvents {

  constructor(io){
    this.io = io;
    this.activate();
    this.watch();
  }

  emitQueue(queue) {
    this.io.emit('queue', queue);
  }

  emitAuction(auction){
    this.io.emit('auction', auction);
  }

  watch() {
    emitter.on('auction:changed', () => this.activate());
  }

  static instance(io) {
    return new AuctionEvents(io);
  }

  activate() {
    auctionDao.list()
      .then(auctions => {
        if(!auctions.length) {
          this.emitQueue([]);
          this.emitAuction(false);
          return;
        }

        let current = auctions.shift();

        this.emitQueue(auctions);
        this.emitAuction(current);
      });
  }

}

module.exports = AuctionEvents;

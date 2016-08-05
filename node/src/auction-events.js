const emitter = require('./events'),
  log = require('easy-log'),
  AuctionDao = require('./dao/auction'),
  auctionDao = new AuctionDao();

class AuctionEvents {

  constructor(io){
    this.io = io;
    this.activate();
    this.watch();
  }

  emitQueue(queue) {
    log.off('socket >> queue');
    this.io.emit('queue', queue);
  }

  emitAuction(auction){
    log.off('socket >> auction');
    this.io.emit('auction', auction);
  }

  watch() {
    emitter.on('auction:changed', () => this.activate());
    emitter.on('user:login', () => this.activate());
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

        let current = auctions.shift(),
          expiration = 90,
          ms = 1000;

        if(!current.finish) { // starting now
          current.finish = new Date().getTime() + expiration * ms;

          auctionDao.updateTime(current)
            .finally(res => {
              log.info(res);
            });
        }

        // handle time diff between server and client;
        current.finishIn = parseInt((current.finish - new Date().getTime()) / ms, 10);

        this.emitQueue(auctions);
        this.emitAuction(current);
      });
  }

}

module.exports = AuctionEvents;

let log = require('easy-log'),
  io;

let start = (app, ioInstance) => {
  io = ioInstance;

  io.on('connection', socket => {
    log.info('new connection');

    for(let key in app.sockets){
      let controller = app.sockets[key];

      controller.register(socket);
    }
  });
};

let broadcast = (event, data) => {
  io.broadcast.emit(event, data);
};

module.exports = {
  start: start,
  broadcast: broadcast
};

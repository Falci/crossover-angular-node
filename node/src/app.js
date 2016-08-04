let express = require('express'),
  logger = require('morgan'),
  socketServer = require('socket.io'),
  http = require('http'),
  bodyParser = require('body-parser'),
  log = require('easy-log'),
  load = require('express-load'),
  socketHandler = require('./socket-handler'),
  AuctionEvents = require('./auction-events'),

  cors = require('./routes/cors'),
  auction = require('./routes/auction');

let app = express(),
  server = http.createServer(app),
  io = socketServer(server),
  port = 4000; // process.env.PORT ||

load('sockets', {cwd: __dirname})
  .into(app);

socketHandler.start(app, io);

AuctionEvents.instance(io);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/*', cors);
app.use('/api/auctions', auction);

server.listen(port);
server.on('listening', () => {
  log.info('Server started');
});

module.exports = app;

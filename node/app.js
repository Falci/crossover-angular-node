var express = require('express'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  socketServer = require('socket.io'),
  http = require('http'),
  log = require('easy-log');

var app = express(),
  server = http.createServer(app),
  io = socketServer(server),
  port = 4000; // process.env.PORT ||


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

io.on('connection', function (socket) {
  log.info('new connection');

  socket.on('login', username => {
    log.success(username + ' in');
    socket.username = username;
    socket.broadcast.emit('login', username);
  });

  socket.on('disconnect', () => {
    if(socket.username) {
      log.warn(socket.username + ' left');
      socket.broadcast.emit('logout', socket.username);
    }
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');

  err.status = 404;
  next(err);
});

// error handlers
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});


server.listen(port);
server.on('listening', () => {
  log.info('Server started');
});


module.exports = app;

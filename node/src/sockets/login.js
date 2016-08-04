let log = require('easy-log'),
  UserDao = require('../dao/users'),
  userDao = new UserDao();

exports.register = (socket) => {
  socket.on('login', username => {
    log.success(username + ' in');

    userDao.findOrCreate(username)
      .then(user => {
        log.off('socket >> login');
        log.off(user);
        socket.emit('login', user);
      });

    socket.username = username;
    socket.broadcast.emit('login', username);
  });
};

let events = require('../events'),
  UserDao = require('../dao/users'),
  userDao = new UserDao();

exports.register = (socket) => {
  socket.on('login', username => {

    userDao.findOrCreate(username)
      .then(user => {
        socket.emit('login', user);
        events.emit('user:login', user);
      });

    socket.username = username;
    socket.broadcast.emit('login', username);
  });
};

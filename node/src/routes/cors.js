var express = require('express'),
  router = express.Router();

/* GET users listing. */
router.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  return next();
});

module.exports = router;

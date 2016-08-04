var express = require('express'),
  router = express.Router(),
  AuctionController = require('../controllers/auction.js'),
  controller = new AuctionController();

router.delete('/:id', (req, res) => controller.remove(req, res) );
router.post('/', (req, res) => controller.insert(req, res) );

module.exports = router;

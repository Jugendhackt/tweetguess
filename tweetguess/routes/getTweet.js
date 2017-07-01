var express = require('express');
var router = express.Router();

var ranked = require('../logic/getRankedTweet');

/* Send initial variables to frontend. */
router.post('/', function(req, res, next) {
  res.send();
});

module.exports = router;

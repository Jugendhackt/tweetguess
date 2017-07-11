var express = require('express');
var router = express.Router();

var verify = require('../logic/verifyTweet');

router.post('/', function(req, res, next) {
  setTimeout(function(){
    verify.verify(req.query.id, function(whose){
      var toSend = whose;
      setTimeout(function(){
        res.send(toSend);
      }, 500);
    });
  }, 300);
});

module.exports = router;

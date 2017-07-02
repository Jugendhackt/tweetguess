var express = require('express');
var router = express.Router();

var ranked = require('../logic/getRankedTweet');

router.get('/', function(req, res, next) {

  var toSend = [];

  setTimeout(function(){
    ranked.getRanked(function(whatToSend){
      toSend[0] = whatToSend;
    }, 1000);
    setTimeout(function(){
      ranked.getOptions(function(sources){
        toSend[1] = sources;
      });
    }, 1000);
  });
  
  res.send(toSend);
});

module.exports = router;

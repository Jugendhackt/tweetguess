var express = require('express');
var router = express.Router();

var ranked = require('../logic/getRankedTweet');

router.get('/', function(req, res, next) {

  var toSend = [];

  setTimeout(function(){
    ranked.getRanked(function(whatToSend){
      toSend[1] = whatToSend;
      setTimeout(function(){
        ranked.getSources(function(sources){
          toSend[0] = sources;
        });
        setTimeout(function(){
          res.send(toSend);
        }, 300);
      }, 300);
    }, 300);
  });
});

module.exports = router;

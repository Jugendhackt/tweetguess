var express = require('express');
var router = express.Router();

var ranked = require('../logic/getRankedTweet');

router.get('/', function(req, res, next) {

  var toSend = {};

  setTimeout(function(){
    ranked.getRanked(function(whatToSend){
      toSend = whatToSend;
      setTimeout(function(){
        ranked.getSources(function(sources){
          toSend.people = sources;
        });
        setTimeout(function(){
          res.send(toSend);
        }, 300);
      }, 300);
    }, 300);
  });
});

module.exports = router;

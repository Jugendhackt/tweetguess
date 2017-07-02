//Hungarian quality software

var mongo = require('mongodb');
var alasql = require('alasql');

module.exports = {
  getRanked : function(callback){
  ///function getRanked(callback){
    var mongoClient = mongo.MongoClient;

    var url = "mongodb://localhost:27017/local";

    mongoClient.connect(url, function(error, db){
      if(error){
        console.log("Unable to connect to database, error: ", error);
      }else {

          db.collection('tweets').find({}).toArray(function(error, result){
            if(error){
              console.log("Unable to access collection!");
            }else if (result.length) {

              var res1 = alasql('SELECT * FROM ? ORDER BY retweet_count',[result]).reverse().slice(0,36);

              var random = Math.floor(Math.random() * 35) + 1;

              var res2 = res1[random];

              var whatToSend = [
                res2.text,
                res2.tweetId
              ];

              callback(whatToSend);

            }else {
              console.log("No documents found!");
            }

            db.close();
          });

      }
    });
  },

  getSources : function(callback){
    var mongoClient = mongo.MongoClient;

    var url = "mongodb://localhost:27017/local";

    var sources = [];

    mongoClient.connect(url, function(error, db){
      if(error){
        console.log("Unable to connect to database, error: ", error);
      }else {

        db.collection('sources').find({}).toArray(function(error, result){
          if(error){
            console.log("Unable to access collection!");
          }else if (result.length) {
            for (var i = 0; i < result.length; i += 1){
              //console.log(result[i].name);
              sources[i] = result[i].name;
            }
            callback(sources);

          }else {
            console.log("No documents found!");
          }

          db.close();
        });
      }
    });
  }
};

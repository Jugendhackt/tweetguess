//Hungarian quality software

var mongo = require('mongodb');

var sources = require('./getRankedTweet');

module.exports = {
  verify : function(idParam, callback){
    var mongoClient = mongo.MongoClient;

    var url = "mongodb://localhost:27017/local";

    var param = idParam;

    mongoClient.connect(url, function(error, db){
      if(error){
        console.log("Unable to connect to database, error: ", error);
      }else {
        console.log(param);
        db.collection('tweets').find({tweetId: param}).toArray(function(error, result){
          if(error){
            console.log("Unable to access collection!");
          }else if (result.length) {
            var whose = result[0].handle;
            
            sources.getSources(function(sources){
              for (var i = 0; i < sources.length; i += 1){
                if(sources[i] == whose){
                  callback(i);
                }
              }
            });

          }else {
            console.log("No documents found!");
          }

          db.close();
        });
      }
    });
  }
};

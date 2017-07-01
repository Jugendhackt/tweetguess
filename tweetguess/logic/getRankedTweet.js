//Hungarian quality software

var mongo = require('mongodb');
var alasql = require('alasql');

//module.exports = {
  //getRanked : function(){
  function getRanked(){
    var mongoClient = mongo.MongoClient;

    var url = "mongodb://localhost:27017/local";

    mongoClient.connect(url, function(error, db){
      if(error){
        console.log("Unable to connect to database, error: ", error);
      }else {

        db.collection('sources').find({}).toArray(function(error, result){
          if(error){
            console.log("Unable to access collection!");
          }else if (result.length) {
            for (var i = 0; i < result.length; i += 1){
              console.log(result[i].name);

              db.collection('tweets').find({
                name: result[i].name
              }).toArray(function(error, result){
                if(error){
                  console.log("Unable to access collection!");
                }else if (result.length) {

                  var res1 = alasql('SELECT * FROM ? ORDER BY retweet_count',[result]).reverse().slice(0,5);

                  console.log(res1);

                }else {
                  console.log("No documents found!");
                }

                db.close();
              });
            }
          }
        });
      }
    });
  }
//};
getRanked();
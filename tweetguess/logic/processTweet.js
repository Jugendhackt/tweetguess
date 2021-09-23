// and finds name, handle (screen_name), twitter_id, count of retweets, text, links
module.exports = {

  processTweet: function(tweet, callback) {
  	var ret = {};
	  if (tweet.entities.urls[0] != undefined){
		  ret.links = tweet.entities.urls[0]['url'];
	  }
	  ret.name = tweet.user.name;
	  ret.created = tweet.created_at;
	  ret.handle = tweet.user.username;
	  ret.id = tweet.user.id;
	  ret.tweetId = tweet.id_str;
	  ret.retweet_count = tweet.retweet_count;
	  ret.text = tweet.full_text;
	  callback(ret);
  }
};

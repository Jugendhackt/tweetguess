// and finds name, handle (screen_name), twitter_id, count of retweets, text, links
module.exports = {

  processTweet: function(tweet, callback) {
  	var ret = {};
  	ret.name = tweet.user.name;
  	ret.handle = tweet.user.screen_name;
  	ret.id = tweet.user.id;
  	ret.retweet_count = tweet.retweet_count;
  	ret.text = tweet.text;
  	ret.links = tweet.entities.urls;
  	callback(ret);
  }
};

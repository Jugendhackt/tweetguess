// example
// getTweet("marenz_1", function(res, code) {
// 	console.log(code + ": " + res);
// });
module.exports = {

  getTweet : function(userName, callback) {
  	var OAuth = require('oauth').OAuth2;

  	var oauth = new OAuth('SjzHdKhqr5zk4Cbm3ohZASYwY',
  		'xkhBw1SQ7ETkZrixgglsVPc8cyFQuuyZz1jW0Fm81SF87DY8DX',
  		'https://api.twitter.com/',
  		null,
  		'oauth2/token',
  		null
  	);

  	oauth.getOAuthAccessToken('',
  		{'grant_type':'client_credentials'},
  		function (e, access_token, refresh_token, results) {
  			oauth._useAuthorizationHeaderForGET = true;
  			oauth.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + userName + '&count=200&exclude_replies=true&include_rts=false&trim_user=false',
  				access_token,
  				function(ret, res, resp) {
  					if (ret != null) {
  						callback(null, ret.statusCode);
  					} else {
  						callback(res, resp.statusCode);
  					}
  				}
  			);
  		}
  	);
  }

};

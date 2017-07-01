// content of the ajax request
var tweetguess = {
'tweet': 'bäume sind blau',
'persons': [
    mark zuckerberg,
    ...
],
'right_answer': 3
};
// if ajax request was not made tweetguess shall be undefined
 */

 var tweetguess = {
 'tweet': 'bäume sind blau',
 'persons': [
     'mark zuckerberg',
     'm2',
     'm3',
     'm4'
 ],
 'right_answer': 1
 };


$('.buttonz').click(function() {
    $('.buttonz' + ':eq(' + tweetguess.right_answer + ')').animate({
        backgroundColor: '#4099ff'
    }, 1000);
});

function timer(){
  var start = "60";
  while (start > 0) {
    start = start - 1;
    sleep(1000);
    return start;
  }
};

$(document).ready(function(){
  $('#score').text("999");
});

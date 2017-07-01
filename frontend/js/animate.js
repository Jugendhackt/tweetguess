// content of the ajax request
//var tweetguess = {
//'tweet': 'bäume sind blau',
//'persons': [
//    mark zuckerberg,
//    ...
//],
//'right_answer': 3
//};
// if ajax request was not made tweetguess shall be undefined

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

var x = 0;
if(x == 0){
$('.buttonz').click(function(i, item) {
    $(i.currentTarget.childNodes[1].childNodes[1]).append("<span class='glyphicon glyphicon-ok blue' style='padding-left: 6px'> </span>")
    $('.buttonz').not(':eq(' + tweetguess.right_answer + ')').fadeTo("fast", 0.2);
    $('.buttonz:eq(' + tweetguess.right_answer + ')').animate({
        backgroundColor: '#4099ff'
    }, 1000);
});
}

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

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

 var doneTheStuff;
$('.buttonz').click(function(i, item) {
    if (!doneTheStuff) {
      doneTheStuff = true;
    $(i.currentTarget.childNodes[1].childNodes[1]).append("<span class='glyphicon glyphicon-ok blue' style='padding-left: 6px'> </span>")
    var elems = document.querySelectorAll(".buttonz");
    var index = 0, length = elems.length;
    document.getElementsByTagName("body")[0].style.cursor = "auto";
    $('.buttonz').not(':eq(' + tweetguess.right_answer + ')').fadeTo("fast", 0.2);
    $('.buttonz:eq(' + tweetguess.right_answer + ')').animate({
        backgroundColor: '#4099ff'
    }, 1000);
    if($('.buttonz:eq(' + tweetguess.right_answer + ')')[0].id == i.currentTarget.id){
        $("#status").css('color', '#3ecd15');
        $("#status").html("Right!")
    } else {
        $("#status").css('color', '#c50e14');
        $("#status").html("Wrong!")
    }
    }
});
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }


    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};



$(document).ready(function(){
  $('#score').text("0");

});

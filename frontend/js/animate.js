$(document).ready(function(){
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
var score = '';
var stringo = '';

var http = new XMLHttpRequest();
var url = "Petersip/getTweet";
var params = "";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);

 var tweetguess = {
 'tweet': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et mahezh',
 'persons': [
     'Mark Zuckerberg',
     'Donald Trump',
     'Angela Merkel',
     'Frauke Petry'
 ],
 'right_answer': 'Mark Zuckerberg'
 };

 var doneTheStuff;
$('.buttonz').click(function (i, item) {
    if (!doneTheStuff) {
        clearInterval(intval);
      doneTheStuff = true;
    $(i.currentTarget.childNodes[1].childNodes[1]).append("<span class='glyphicon glyphicon-ok blue' style='padding-left: 6px'> </span>")
    console.log(i.currentTarget.innerText.toLowerCase().replace(/(\r\n|\n|\r)/gm,""));
    var elems = document.querySelectorAll(".buttonz");
    var index = 0, length = elems.length;
    document.getElementsByTagName("body")[0].style.cursor = "auto";
    stringo = i.currentTarget.innerText.replace(/(\r\n|\n|\r)/gm,"");
    $.each(tweetguess.persons, function(i, item) {
        if(tweetguess.persons[i] == tweetguess.right_answer){
            $('.buttonz').not(':eq(' + i + ')').fadeTo("fast", 0.2);
            $('.buttonz:eq(' + i + ')').animate({
                backgroundColor: '#4099ff'
            }, 1000);
        }
    })
    if(tweetguess.right_answer == stringo){
        sucess();
        display = document.querySelector('#score');
        var n = display.textContent.lastIndexOf(':');
         var result = display.textContent.substring(n + 1);
         score = (score + (100 - (60/result)));
         score = Math.round(score);
         $('#score').text(score);
    } else {
        failure();
    }
    return stringo;
    }
});
var intval;
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

        display.textContent = minutes + ":" + seconds + " ";

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            timeFailure();
            clearInterval(intval);

        }
        if(seconds < 10){
           $(display).addClass("timer_red");
           $(display).addClass("blinker");
       }
else {
  $(display).removeClass("timer_red");
  $(display).removeClass("blinker");
}


    }
    // we don't want to wait a full second before the timer starts
    timer();
    intval = setInterval(timer, 1000);
}
    window.onload = function () {
        var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
        load();
    };
function load(){
  $('#tweetDisplay').text(tweetguess.tweet);
  $('#answer0').text(tweetguess.persons[0]);
  $('#answer1').text(tweetguess.persons[1]);
  $('#answer2').text(tweetguess.persons[2]);
  $('#answer3').text(tweetguess.persons[3]);
}


$(document).bind('keypress', "a+ctrl", function(){
   $("#tweetDisplay").addClass("rainbow");
});

function sucess(){
    $("#status").css('color', '#3ecd15');
    $("#status").addClass("tada animated");
    $("#status").html("<b>Right!</b>");
}
function failure(){
    $("#status").css('color', '#c50e14');
    $("#status").addClass("tada animated");
    $("#status").html("<b>Wrong!</b>")

    doneTheStuff = true;
}
function timeFailure(){
    $("#status").css('color', '#c50e14');
    $("#status").addClass("tada animated");
    $("#status").html("<b>Too long!</b>!")
    $('.buttonz').fadeTo("fast", 0.2);
        doneTheStuff = true;
}
});

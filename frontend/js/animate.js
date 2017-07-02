
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
        return seconds;
        }
    }

    var doneTheStuff;
   $('.buttonz').click(function (i, item) {
       clearTimeout(t);
       if (!doneTheStuff) {
         doneTheStuff = true;
         console.log(i);
       $(i.currentTarget).append("<span class='glyphicon glyphicon-ok blue' style='padding-left: 6px'> </span>")
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
           }S
       })
       if(tweetguess.right_answer == stringo){
           $("#status").css('color', '#3ecd15');
           $("#status").html("Right!")

           var n = display.textContent.lastIndexOf(':');
           var result = display.textContent.substring(n + 1);
           score = (score + (100 - (60/result)));
           score = Math.round(score);
           $('#score').text(score);

       } else {
           $("#status").css('color', '#c50e14');
           $("#status").html("Wrong!")
       }
       return stringo;
       }
   });

    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

function load(){
  $('#tweetDisplay').text(tweetguess.tweet);
  $('#answer0').text(tweetguess.persons[0]);
  $('#answer1').text(tweetguess.persons[1]);
  $('#answer2').text(tweetguess.persons[2]);
  $('#answer3').text(tweetguess.persons[3]);
  load();
}


$(document).ready(function() {
	$.get('http://172.16.17.104:80/getTweet', function(data) {
	  $('#tweetDisplay').text(data.tweet);
		$('.buttonz').each(function(i, item) {
			$(this).text(data.people[i]);
		});

		var t = setTimeout(timer, 1000);
		var duration = 30;
		var timer = function() {
			if (duration > 0) {
				t = setTimeout(timer, 1000);
				duration -= 1;
			}
			$('#time').text(duration);
		};

		timer();

		$('.buttonz').click(function() {
			clearTimeout(t);
			$.post('http://172.16.17.104:80/verify?id=' + data.id, function(aw) {
				var right_answer =  $('.buttonz:eq(' + aw + ')');
				var wrong_answer =  $('.buttonz').not(':eq(' + aw + ')');
				wrong_answer.fadeTo("fast", 0.2);
				right_answer.animate({
						backgroundColor: '#4099ff'
					},
					1000
				);
				if (this.isEqualNode(right_answer[0])) {
					$("#status").css('color', '#3ecd15');
					$("#status").html("Right!");
					$('#score').text(duration);
				} else {
					$("#status").css('color', '#c50e14');
					$("#status").html("Wrong!");
				}
			});
		});
	});

});
});
$(document).bind('keydown', 'Ctrl+a', function(){
   $("#tweetDisplay").addClass("rainbow");
});

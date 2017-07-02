$(document).ready(function() {
	console.log('ready');
	$.get('http://kes:80/getTweet', function(data) {
		console.log(data);
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

		timer(30, $('#time'));

		$('.buttonz').click(function() {
			clearTimeout(t);
			$.post('http://kes:80/verify?id=' + data.id, function(aw) {
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

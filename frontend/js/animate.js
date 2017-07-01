/*function validate(i){
    $.post("",
   {
       name: i,
   },
   function(data, status){
       var a = ["answer1", "answer2", "answer3", "answer4"];
       $.each(a, function(i, item) {
         if($(item).html() == data){
             // wird richtiges nicht verblasse
             $(item).html()
             if($(item).html() == i){
             }
         } else {
             //verblassen
             $(item)
         }
 });
   });
} */
/*

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

function valitest(i){
    var a = ["#answer1", "#answer2", "#answer3", "#answer4"];
    var b = ["#panel1", "#panel2", "#panel3", "#panel4"];
    $.each(a, function(i, item) {
      if($(item).html() == "Button 1"){
          $(b[i]).animate({
              backgroundColor: "#4099ff;",
              color: "#000",
          }, 1000 );
          if($(item).html() == i){
              console.log("right!");
          } else{
              console.log("false!");
          }
      } else {
          //verblassen
          $(item).fadeTo("fast", 0.2);
          /*$(b[i]).animate({
          backgroundColor: "",
          color: "#000",
      }, 1000 ); */
      }
});
}

function reset(){
var a = ["#anim1", "#anim2", "#anim3", "#anim4"];
}
function refreshDialer(i){
   //alert("In function");
   var container = document.getElementById(i);
   var content = container.innerHTML;
   //alert(content);
   container.innerHTML= content;
}

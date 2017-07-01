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

$(function(){
  var initial = 0
  var goal = parseInt($("#countTo").val());
  var final = parseInt($("#countBy").val());
  var output = [];

  $("#submit").click(function(e){
    e.preventDefault()
    
    console.log(goal);
    for (i=0; i<=goal.length; i+=final) {

      if (final <= goal){

      }else {

      }

    }


  });
});

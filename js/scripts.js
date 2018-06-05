$(function(){


  $("#submit").click(function(e){
    e.preventDefault()
    var initial = 0
    var goal = parseInt($("#countTo").val());
    var final = parseInt($("#countBy").val());
    var arrays = [];
    var output = [];

    for (var index=0; index<=goal; index+=final) {
      output.push(index);
      arrays.push(output);
    }

    // console.log(output);
      console.log(arrays);
      var finalArray= arrays.pop();
      console.log(finalArray);
      $("#output").prepend("<li>"+ finalArray + "</li>");
  });


});

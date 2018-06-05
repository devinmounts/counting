$(function(){

  // Count Numbers
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

      var finalArray= arrays.pop();
      $("#output").prepend("<li>"+ finalArray + "</li>");
  });

  // Word Puzzle
// We go together like cocaine and waffles.

  $("#wordShow").click(function(e){
    e.preventDefault()
    var quote1 = ("Hello")
    var vowels = ["a", "e", "i", "o", "u", "y"]
    var noVowels = [];

    var quoteArray = quote1.split("");

      for (var i=0; i<=quoteArray.length; i +=1){
        for(var k=0; k<=vowels.length; k +=1){
          if (quoteArray[i]===vowels[k]){
            vowels[k]=vowels.length;
            quoteArray[i] = "-";
          console.log(quoteArray);
          }
        }
      }

  });

});

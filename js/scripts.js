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
    var quote1 = ("We go together like cocaine and waffles.")
    var vowels = ["a", "e", "i", "o", "u", "y"]
    var noVowels = [];

    var quoteArray = quote1.split("");
      // first loop through quoteArray that takes info from quote1
      for (var i=0; i<quoteArray.length; i
        // second loop using info from vowels
        for(var k=0; k<vowels.length; k ++){
          // if statement that asks if the variables from the for loops are equal
          if (quoteArray[i]===vowels[k]){
            // stops the second for loop
            k=vowels.length;
            // adds the dash to the current letter we are on using the i variable
            quoteArray[i] = "-";

          }
        }
      }
      console.log(quoteArray);
      var finalQuote = quoteArray.join("");

      $("#blankOutput").prepend("<li>"+ finalQuote + "</li>");

      $("#quoteShow").click(function(){
      $("#quoteOutput").prepend("<li>"+ quote1 + "</li>");

      });
      });
});

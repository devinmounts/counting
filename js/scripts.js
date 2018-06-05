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
var quote1 = ["We go together like cocaine and waffles."]
var vowels = ["a", "e", "i", "o", "u", "y"]
var noVowels = [];



quote1.indexOf(vowels);
console.log(vowels);




});

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

      for (var i=0; i<quoteArray.length; i++){
        for(var k=0; k<vowels.length; k ++){
          if (quoteArray[i]===vowels[k]){
            k=vowels.length;
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

        //Transportation Survey

      $("form#transportation_survey").submit(function(event){
        event.preventDefault();
        $("#work-responses").show();
        $("input:checkbox[name=work-transportation]:checked").each(function(){
          var workTransportationMode = $(this).val();
          $('#work-responses').append(workTransportationMode + "<br>");
        });
        $('#transportation_survey').hide();
  });

    $("form#stressSurvey").submit(function(event){
      event.preventDefault();
      $("#stressResponses").show();
      $("input:checkbox[name=stressInfo]:checked").each(function(){
        var stress = $(this).val();
        $('#stressResponses').append(stress + "<br>");
      });
      $('#stressSurvey').hide();
});
});

$(document).ready(function() {

  $("#form").submit(function(event) {
    var sentence = $("input#sentence").val();
    var sentenceArray = sentence.split("");

    for ( var i=0; i< sentenceArray.length; i++) {
      if (sentenceArray[i] === "a" || sentenceArray[i] === "e" || sentenceArray[i] === "i" || sentenceArray[i] === "o" || sentenceArray[i] === "u") {
        sentenceArray[i] = "-";
      }
    }

    sentenceArray = sentenceArray.join("");
    alert(sentenceArray);

    event.preventDefault();
  });
});

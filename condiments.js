var Sandwich = (function(sandwich) {
  var choices ={
    "ketchup": "$1.00",
    "mustard": "$1.00",
    "oil and vinegar": "$1.00",
    "mayo": "$1.00"
  };

  sandwich.condiments = function(input) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] in choices) {
        sandwich_here.innerHTML += input[i] + " " + choices[input[i]] + " ;";
      }
    }
  }
  return sandwich;

})(Sandwich);

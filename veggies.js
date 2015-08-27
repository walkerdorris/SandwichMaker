var Sandwich = (function(sandwich) {
  var choices ={
    "lettuce": "$1.00",
    "tomato": "$1.50",
    "cucumber": "$1.00",
    "sprouts": "$1.00"
  };

  sandwich.veggies = function(input) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] in choices) {
        sandwich_here.innerHTML += input[i] + " " + choices[input[i]] + "; ";
      }
    }
  }
  return sandwich;

})(Sandwich);

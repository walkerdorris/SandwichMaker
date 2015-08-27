var Sandwich = (function(sandwich) {
    var choices = {
      "cheddar": "$1.00",
      "swiss": "$1.50",
      "manchego": "$1.50",
      "brie": "$2.00"
    };

    sandwich.cheese = function(input) {
      for (var i = 0; i < input.length; i++) {
        if (input[i] in choices) {
          sandwich_here.innerHTML += input[i] + " " + choices[input[i]] + "; ";

    }
  }
}
return sandwich;
})(Sandwich);










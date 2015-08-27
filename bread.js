var Sandwich = (function(sandwich) {
    var choices = {
      "white": "$1.00",
      "rye": "$1.50",
      "wheat": "$1.50",
      "marble": "$1.50"
    };

    sandwich.bread = function(input) {
      for (var i = 0; i < input.length; i++) {
        if (input[i] in choices) {
          sandwich_here.innerHTML += input[i] + " " + choices[input[i]] + "; ";

    }
  }
}
return sandwich;
})(Sandwich);

var Sandwich = (function(sandwich) {
  var choices ={
    "turkey": "$1.00",
  	"ham": "$1.50",
  	"steak": "$2.00",
  	"salami": "$1.00"
  };

  sandwich.meat = function(input) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] in choices) {
        sandwich_here.innerHTML += input[i] + " " + choices[input[i]] + " ;";
      }
    }
  }
  return sandwich;

})(Sandwich);

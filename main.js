var Sandwich = {};

var button = document.getElementById("create_sandwich");
var orderlist = document.getElementById("sandwich_here");
var selections = {
  "bread": [],
  "cheese": [],
  "condiments": [],
  "meat": [],
  "veggies": []
};

var details = ["bread","cheese","condiments","meat","veggies"];

function getValues () {
  for (var i = 0; i < details.length ; i++) {
    var obj = $('input[name='+details[i]+']:checked');
    $(obj).each(function(index,type){
      selections[details[i]].push($(this).val());
    });
  }
  console.log(selections);
  Sandwich.meat(selections.meat);
  Sandwich.bread(selections.bread);
  Sandwich.condiments(selections.condiments);
  Sandwich.cheese(selections.cheese);
  Sandwich.veggies(selections.veggies);

}

button.addEventListener("click", getValues);

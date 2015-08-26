$(document).ready(function() {

var details = [];


function food () {
  if ($("input[name='bread')]:checked").val() === "white") {
    details.push = "White";
    console.log(details);
  }
}

$("#create_sandwich").click(function() {
  food();
});

});

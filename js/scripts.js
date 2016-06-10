// BACK END //

var start = 0;
var numberArray = [];

// spec 1: count up to the specified number. //
var countUp = function(number) {
  for (var i = 1; i <= number; i++) {
    numberArray.push(i);
  }
}
// end spec 1: =======================//










// FRONT END //
$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#number").val());

    countUp(input);
    console.log(numberArray);
  });
});

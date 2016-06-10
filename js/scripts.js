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

// spec 2: numbers divisible by 3 are replaced with "ping". //
var ping = function(number) {
numberArray.forEach(function(number) {
  if (number % 3 === 0) {
    numberArray[number-1] = "ping";
  }
});
}
// end spec 2: =====================//

// spec 3: numbers divisible by 5 are replaced with "pong". //
var pong = function(number) {
numberArray.forEach(function(number) {
  if (number % 5 === 0) {
    numberArray[number-1] = "pong";
  }
});
}



// FRONT END //
$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#number").val());

    countUp(input);
    ping(numberArray);
    pong(numberArray);
    console.log(numberArray);
  });
});

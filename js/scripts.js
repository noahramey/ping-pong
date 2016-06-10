// BACK END //

var start = 0;
var numberArray = [];

// spec 1: count up to the specified number. //
var countUp = function(number) {
  for (var i = 1; i <= number; i++) {
    numberArray.push(i);
  }
}

// spec 2: numbers divisible by 3 are replaced with "ping". //
var ping = function(number) {
numberArray.forEach(function(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    numberArray[number-1] = "ping";
  }
});
}

// spec 3: numbers divisible by 5 are replaced with "pong". //
var pong = function(number) {
numberArray.forEach(function(number) {
  if (number % 5 === 0 && number % 3 !== 0) {
    numberArray[number-1] = "pong";
  }
});
}


// spec 4: numbers divisible by 15 are replaced with "pingpong". //
var pingPong = function(number) {
  numberArray.forEach(function(number) {
    if (number % 15 === 0) {
      numberArray[number-1] = "pingpong";
    }
  });
}

var replaceDivisible = function(number) {
  ping(number);
  pong(number);
  pingPong(number);
  numberArray.forEach(function(number) {
  $("#output").append("<li>" + number + "</li>");
  });
  numberArray = [];
}



// FRONT END //
$(function() {
  $("#input").submit(function(event) {

    $("#output").empty();

    var input = parseInt($("#number").val());
    countUp(input);
    replaceDivisible(numberArray);

    event.preventDefault();
  });
});

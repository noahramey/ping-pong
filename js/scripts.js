// BACK END //

var countUp = function(number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

var pingPong = function(number) {
  var numberArray = countUp(number);
  numberArray.forEach(function(number) {
    if (number % 15 === 0) {
      numberArray[number-1] = "pingpong";
    } else if (number % 5 === 0) {
      numberArray[number-1] = "pong";
    } else if (number % 3 === 0) {
      numberArray[number-1] = "ping";
    }
  });
  return numberArray;
}

// FRONT END //
$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    $("#output").empty();

    var input = parseInt($("#number").val());

    var numberArray = pingPong(input);

    numberArray.forEach(function(number) {
      $("#output").append("<li>" + number + "</li>");
    });
  });
});

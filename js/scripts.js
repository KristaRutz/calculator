//"business" logic

function add(number1,number2){
  return number1 + number2;
 }

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}

//User interface logic

//  var number1 = parseInt(prompt("1st number?"));
//  var number2 = parseInt(prompt("2nd number?"));
//  var result =  divide(number1, number2);
//  alert("It is " + result);

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val()); 
    var result = add(number1, number2);
    $("#addition-output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val()); 
    var result = subtract(number1, number2);
    $("#subtraction-output").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val()); 
    var result = multiply(number1, number2);
    $("#multiplication-output").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val()); 
    var result = divide(number1, number2);
    $("#division-output").text(result);
  });
});

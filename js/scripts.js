// business logic
function pingPong(userNumber){
  var integer = (userNumber).split('');
  var numberArray = []

// Adds the numbers into numberArray
  for (i = 1; i <= userNumber; i++){
    numberArray.push(i);
  }

// Checks each part of numberArray for 3, 5 or 15 divisibility and splices pingpong in
  for (var ii = 0; ii < numberArray.length; ii++){
    if (numberArray[ii] % 15 == 0){
      numberArray.splice(ii, 1,"pingpong")
    }else if (numberArray[ii] % 5 == 0){
      numberArray.splice(ii, 1,"pong")
    }else if (numberArray[ii] % 3 ==0){
      numberArray.splice(ii, 1,"ping")
    }
  }
  return numberArray;
}






// UI logic
$(document).ready(function(){
  $('#but').click(function(event){
    event.preventDefault;
    var userNumber = $('#input').val();
    var result = pingPong(userNumber);
    $('#display').empty();
      $('#display').show();

// populates ul for each part of numberArray (return)
    for (i = 0; i < result.length; i++)
    $('#display').append('<li>' + result[i] + '</li>');
  });
});

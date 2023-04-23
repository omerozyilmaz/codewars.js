/* 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function replaceDigits(str) {
    return str.replace(/\d/g, function(match) {
      return (parseInt(match) >= 5) ? '1' : '0';
    });
  }
  
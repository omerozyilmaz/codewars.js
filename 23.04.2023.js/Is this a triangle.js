/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
*/
function sortNumbersDesc(a,b,c){
    let sorted = [a,b,c].sort(function(x,y){
                              return x-y
                              })
    return sorted
  }
  function isTriangle(a, b, c) {
    let sorted = sortNumbersDesc(a, b, c);
    return sorted[2] < sorted[1] + sorted[0];
    return true
  }
  
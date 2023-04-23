//Given an integral number, determine if it's a square number

var isSquare = function(n){
    const squareRoot = Math.sqrt(n)
    if (squareRoot===Math.floor(squareRoot)){
      return true
    } else {
      return false
    }
  
  }


  /* var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0 ? true : false;
};
*/
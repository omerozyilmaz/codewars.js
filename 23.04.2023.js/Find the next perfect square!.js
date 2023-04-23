/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/
function findNextSquare(sq) {
    // Get the square root of the input number
    const squareRoot = Math.sqrt(sq);
  
    // Check if the square root is an integer
    if (Number.isInteger(squareRoot)) {
      // If it is, increment it by 1 and return its square
      const nextNumber = squareRoot + 1;
      return nextNumber * nextNumber;
    } else {
      // If it's not, return -1
      return -1;
    }
  }
  //Number.isInteger() fonksiyonu, verilen değerin bir tamsayı olup olmadığını kontrol eder. Eğer verilen değer bir tamsayı ise true, değilse false değeri döndürür. Dolayısıyla, bu koşulda squareRoot değerinin bir tamsayı olup olmadığı kontrol edilerek, bir sonraki karekökün bulunup bulunamayacağına karar verilmiştir. Eğer squareRoot bir tamsayı ise, yani sq bir tam kare olduğu durumda, bir sonraki karekök bulunabilir. Aksi halde, yani squareRoot bir tamsayı değilse, sq tam bir kare olmadığından -1 değeri döndürülmelidir.
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
    //code me
   let count = 0
   while (num>9){
     let product = 1
     while (num>0){
       product *= num % 10
       num = Math.floor (num / 10)
     }
     num=product
     count++
   }
   return count
 }
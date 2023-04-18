/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
function findOdd(arr) {
    let counts = {};
     
     for (let i = 0 ; i < arr.length ; i++){
       const num = arr[i];
       if (counts[num] === undefined ){
         counts[num] = 1
       } else {
         counts[num]++;
       }
     }
     for (const num in counts){
       if (counts[num] %2 !== 0 ){
         return parseInt(num);
       }
     }
     
   }
   
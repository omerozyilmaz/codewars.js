/*Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/



const min = function(list) {
    let minimum = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] < minimum) {
        minimum = list[i];
      }
    }
    return minimum;
  }
  
  const max = function(list) {
    let maximum = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > maximum) {
        maximum = list[i];
      }
    }
    return maximum;
  }
  
  // OR
  const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
*/

function isIsogram(str) {
    const letters= {};
      for(let letter of str.toLowerCase()){
        if (letters[letter]){
          return false
        }
        letters[letter]= true
      }
      return true
    }
    
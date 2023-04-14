//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(str) {
    let length = str.length;
    let middleIndex = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return str.substring(middleIndex - 1, middleIndex + 1);
    } else {
      return str[middleIndex];
    }
  }
  
/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/
function past(h, m, s){
    const total = (h*60*60+m*60+s)*1000;
    return total
  }
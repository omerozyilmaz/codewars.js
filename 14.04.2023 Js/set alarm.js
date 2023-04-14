//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

function setAlarm(employed, vacation){
    if (vacation===true){
      return false;
    } else if (employed===false){
      return false  
    }
      else {return true}
    }



   // or 
    const setAlarm = (employed, vacation) => employed && !vacation;
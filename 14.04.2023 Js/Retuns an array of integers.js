//Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    const result=[];
    for (let i=n ; i >= 1; i-- ){
      result.push(i);
    }
    return result
  };
/*You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
*/
function findEvenIndex(arr)
{
  //Code goes here!
  for (let i = 0 ; i<arr.length; i++){
    const leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    const rightSum = arr.slice(i+1).reduce((acc,val) => acc+val, 0);
    if (leftSum===rightSum){
      return i;
    }
  }
  return -1
}
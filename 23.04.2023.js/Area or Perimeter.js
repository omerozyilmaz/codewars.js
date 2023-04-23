/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
*/
const areaOrPerimeter = function(l , w) {
    // Return your answer
    let area = l*w;
    let perimeter = (l+w)*2;
    if (l === w){
      return area
    } else {
      return perimeter
    }
  }
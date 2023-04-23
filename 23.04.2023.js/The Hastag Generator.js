function generateHashtag (str) { 
    var s = "#" + str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}).split(" ").join("");
    if(str && s.length <= 140){
      return s;
    } return false; 
}
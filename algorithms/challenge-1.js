function countCharOccurrences(string ,char) {
   let count = 0;

  for(let i = 0; i < string.length; i++) {

   if (string[i] == char) {
      count ++;
    }

  }
  return count;
}
    let string = "ballon";
    let char = "l";
    let count = countCharOccurrences(string, char);

    console.log(countCharOccurrences("ballon", "l"));
   
module.exports = countCharOccurrences

function fizzBuzz(num) {  
    if (num % 15 === 0) {
            return "fizzbuzz";
    } else if (num % 3 === 0) {
            return "fizz";
    } else if (num % 5 === 0) {
            return "buzz";
    } 
}
    
   console.log(fizzBuzz(45));
    


module.exports = fizzBuzz;

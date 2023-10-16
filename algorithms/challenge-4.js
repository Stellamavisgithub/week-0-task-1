function findSmallest(num1, num2, num3) {
    
    return Math.min(num1, num2, num3);
}
    let number1 = 60;
    let number2 = 10;
    let number3 = 30;
    
    let smallest = findSmallest(number1, number2, number3);

    console.log(smallest);

module.exports = findSmallest;

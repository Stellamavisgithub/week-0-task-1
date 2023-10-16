function isLeapYear(year) {

    return (year % 4 === 0 && year % 100 !==0) || (year % 400 === 0);
}

    let yearOne = 2013
    let yearTwo = 2020

   console.log(isLeapYear(yearOne));
   console.log(isLeapYear(yearTwo));

   
module.exports = isLeapYear;
 
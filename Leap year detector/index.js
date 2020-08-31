function isLeap(year) {
       
    var leapYear = "Leap year.";
    var notLeapYear = "Not leap year.";   
    
    if (year % 4 !== 0) {
        return notLeapYear;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
      return leapYear;
    }
    if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
      return notLeapYear;
    }
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
      return leapYear;
    }   
    
    }
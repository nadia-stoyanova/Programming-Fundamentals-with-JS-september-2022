function nextDay(year, month, day) {
    if (day < 27) {
      day = day + 1;
    } else if (day === 28) {
      if (month != 2) {
        day = day + 1;
      } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        day = day + 1;
      } else {
        day = 1;
        month = 3;
      }
    } else if (day === 29) {
      if (
        ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) &&
        month === 2
      ) {
        day = 1;
        month = 3;
      } else {
        day = day + 1;
      }
    } else if (day === 30) {
      if (
        month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12
      ) {
        day = day + 1;
      } else {
        day = 1;
        month = month + 1;
      }
    } else if (day === 31) {
      if (month === 12) {
        day = 1;
        month = 1;
        year++;
      } else {
        day++;
        month++;
      }
    }
    if (year === 1) {year = 1901}
    console.log(`${year}-${month}-${day}`);
  }
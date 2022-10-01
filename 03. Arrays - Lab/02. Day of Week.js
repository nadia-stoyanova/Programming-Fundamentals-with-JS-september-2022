function dayOfWeek(day) {
  let dayName = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"];
  if (day < 1 || day > 7) {
    console.log("Invalid day!");
  } else {
    console.log(dayName[day - 1]);
  }
}
dayOfWeek(11);

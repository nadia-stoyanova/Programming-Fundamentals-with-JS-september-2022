function worldTour(input) {
  let stops = input.shift();
  let stopLength = stops.length;
  
  while (input[0] !== "Travel") {
    let line = input.shift().split(":")
    let command = line[0];

    if (command === "Add Stop") {
      let index = Number(line[1]);
      let string = line[2];
      if (index >= 0 && index < stopLength) {
        let str1 = stops.substring(0, index);
        let str2 = stops.substring(index);
        stops = str1 + string + str2;
      }
      console.log(stops);
    } else if (command === "Remove Stop") {
      let start_index = Number(line[1]);
      let endt_index = Number(line[2]);
      if (
        start_index >= 0 &&
        start_index < stopLength &&
        endt_index >= 0 &&
        endt_index < stopLength
      ) {
        let str1 = stops.substring(0, start_index);
        let str2 = stops.substring(endt_index + 1);
        stops = str1 + str2;
      }
      console.log(stops);
    } else if (command === "Switch") {
      let old_string = line[1];
      let new_string = line[2];
      if (stops.includes(old_string)) {
        stops = stops.split(old_string).join(new_string);
      }
      console.log(stops);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

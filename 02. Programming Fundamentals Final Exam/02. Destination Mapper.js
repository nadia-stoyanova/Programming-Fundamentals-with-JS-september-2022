function destinationMapper(input) {
  let pattern = /([=\/]{1})(?<name>[A-Z][A-Za-z]{2,})\1/g;
  let arr = [];
  let sum = 0;
  let matches = pattern.exec(input);
  if (matches !== null) {
    {
      arr.push(matches.groups.name);
    }
    while (matches !== null) {
      matches = pattern.exec(input);
      if (matches !== null) arr.push(matches.groups.name);
    }
    console.log(`Destinations: ${arr.join(", ")}`);

    for (const ind of arr) {
      sum += ind.length;
    }

    console.log(`Travel Points: ${sum}`);
  } else {
    console.log(`Destinations: `);
    console.log(`Travel Points: 0`);
  }
}
destinationMapper("ThisIs some InvalidInput");

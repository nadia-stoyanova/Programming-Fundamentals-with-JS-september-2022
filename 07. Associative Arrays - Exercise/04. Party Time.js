function partyTime(array) {
  let vip = [];
  let regular = [];
  let guest = array.shift();

  while (guest !== "PARTY") {
    const isNotVIP = isNaN(guest[0]);

    if (isNotVIP) {
      regular.push(guest);
    } else {
      vip.push(guest);
    }

    guest = array.shift();
  }

  let allGuest = vip.concat(regular);

  for (const guest of array) {
    if (allGuest.includes(guest)) {
      allGuest.splice(allGuest.indexOf(guest), 1);
    }
  }

  console.log(allGuest.length);
  allGuest.forEach((guest) => console.log(guest));
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

function pianist(input) {
  let n = Number(input.shift());
  let pieces = {};

  for (let i = 0; i < n; i++) {
    let line = input.shift().split("|");
    let piece = line[0];
    let composer = line[1];
    let key = line[2];
    pieces[piece] = { composer, key };
  }

  while (input[0] !== "Stop") {
    let line = input.shift().split("|");

    let command = line[0];
    if (command === "Add") {
      let piece = line[1];
      let composer = line[2];
      let key = line[3];
      if (pieces.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        pieces[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (command === "Remove") {
      let piece = line[1];
      if (pieces.hasOwnProperty(piece)) {
        delete pieces[piece];
        console.log(`Successfully removed ${piece}!`);
      } else { console.log(`Invalid operation! ${piece} does not exist in the collection.`);}
    } else if (command === "ChangeKey") {
      let piece = line[1];
      let newKey = line[2];
      if (pieces.hasOwnProperty(piece)) {
        pieces[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }
  for (const piece in pieces) {
    console.log(
      `${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`
    );
  }
}

pianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

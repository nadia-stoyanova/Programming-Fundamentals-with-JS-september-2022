function wordTracker(input) {
  let obj = {};

  let tokens = input.shift().split(" ");

  let arrLen = tokens.length;
  for (const token of tokens) {
    obj[token] = 0;

    for (const word of input) {
      if (word === token) {
        let exist = obj[token];
        exist++;
        obj[token] = exist;
      }
    }
  }

  let sorted = Object.entries(obj);
  sorted.sort((a, b) => b[1] - a[1]);

  for (let word of sorted) {
    console.log(`${word[0]} - ${word[1]}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

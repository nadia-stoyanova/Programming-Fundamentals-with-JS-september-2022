function emojiDetector(input) {
  let pattern = /[0-9]/g;
  let arr = [];
  let text = input[0];
  let match = text.match(pattern);

  let threshold = 1;
  for (const char of match) {
    threshold *= Number(char);
  }
  console.log(`Cool threshold: ${threshold}`);

  let pattern1 = /([\:]{2}|[*]{2})(?<name>[A-Z][a-z]{2,})\1/g;
  let count = 0;
  let exec = pattern1.exec(text);
  while (exec) {
    count++;
    let string = exec.groups.name;
    let coolThreshold = 0;
    for (let i = 0; i < string.length; i++) {
      coolThreshold += string.charCodeAt(i);
    }

    if (coolThreshold > threshold) {
      arr.push(exec[0]);
    }
    exec = pattern1.exec(text);
  }

  console.log(`${count} emojis found in the text. The cool ones are:`);
  for (const iterator of arr) {
    console.log(iterator);
  }
}
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);

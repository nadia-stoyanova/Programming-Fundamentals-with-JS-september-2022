function oddOccurrences(input) {
  let lowerInput = input.toLowerCase();

  let obj = {};

  let arr = lowerInput.split(" ");

  for (let el of arr) {
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }

  let str = "";

  for (let el of arr) {
    if (obj[el] % 2 === 1) {
      str += " " + el;
      delete obj[el];
    }
  }
  console.log(str);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

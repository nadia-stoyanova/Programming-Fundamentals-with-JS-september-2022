function passwordGenerator(array) {
  let str = array[0] + array[1];
  
  let str1 = "";
  let pass = array[2].toUpperCase();
  let i = 0;
  for (const element of str) {
    if (
      element === "a" ||
      element === "o" ||
      element === "i" ||
      element === "e" ||
      element === "u"
    ) {
      str1 += pass[i];
      i++;
      if (i >= pass.length) i = 0;
    } else {
      str1 += element;
    }
  }

  console.log(`Your generated password is ${str1.split("").reverse().join("")}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);

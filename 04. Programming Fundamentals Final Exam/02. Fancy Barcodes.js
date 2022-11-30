function fancyBarcodes(input) {
  let n = Number(input.shift());

  

  for (let i = 0; i < n; i++) {
    let pattern = /[@][#]+(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])[@][#]+/;
    let newStr = input[i];
    let exec = pattern.exec(newStr);
    if (exec) {
      let string = exec.groups.name;
      let num = "";
      for (let index = 0; index < string.length; index++) {
        if (string.charCodeAt(index) >= 48 && string.charCodeAt(index) <= 57) {
          num += string[index];
        }
      }
      if (num.length === 0) {
        console.log("Product group: 00");
      } else {
        console.log(`Product group: ${num}`);
      }
    } else {
      console.log("Invalid barcode");
    }
  }
}
fancyBarcodes([
  "4",
  "@###Che46sE@##", 
  "@#FreshFisH@#", 
  "@###Brea0D@###", 
  "@##Che46sE@##"
]);

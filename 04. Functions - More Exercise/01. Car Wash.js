function carWash(array) {
let persent = 0

function crearOrDirty(persent, command) {
switch (command) {
case "soap": return 10; break;
case "water": return (persent /5); break;
case "vacuum cleaner": return (persent /4); break;
case "mud": return (persent /-10); break;
}
}

for (let i = 0; i < array.length; i++) {
let currentComand = String(array[i])
persent += crearOrDirty(persent, currentComand)

}
console.log(`The car is ${persent.toFixed(2)}% clean.`)

} carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
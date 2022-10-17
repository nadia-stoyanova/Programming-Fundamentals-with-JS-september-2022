function gladiatorInventory(array) {
  let inventory =  array.shift().split(" ");


  for (let i = 0; i < array.length; i++) {
    let currentArr = [];
    currentArr = array[i].split(" ");

    let command = currentArr[0];
    let equipment = currentArr[1];
    switch (command) {
      case "Buy":
        if (!inventory.includes(equipment)) {
          inventory.push(equipment);
        }
        break;
      case "Trash":
        if (inventory.includes(equipment)) {
          let i = inventory.indexOf(equipment);
          inventory.splice(i, 1);
        }
        break;
      case "Repair":
        if (inventory.includes(equipment)) {
          let i = inventory.indexOf(equipment);
          inventory.splice(i, 1);
          inventory.push(equipment);
        }
        break;
      case "Upgrade":
        let upgr = [];
        upgr = equipment.split("-");

        if (inventory.includes(upgr[0])) {
          let i = inventory.indexOf(upgr[0]);
          let str = upgr[0] + ":" + upgr[1];
          inventory.splice(i + 1, 0, str);
        }
        break;
    }
  }
  console.log(inventory.join(" "));
}
arrayManipulator([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
])

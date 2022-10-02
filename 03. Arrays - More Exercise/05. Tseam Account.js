function tseamAccount(arr) {
  let lengthArr = arr.length;
  let newArr = [];
  for (let i = 0; i < lengthArr; i++) {
    newArr[i] = arr[i].split(" ");
  }
  for (let j = 0; j < lengthArr; j++) {
    switch (newArr[j][0]) {
      case "Install":
        if (!newArr[0].includes(newArr[j][1])) {
          newArr[0].push(newArr[j][1]);
        }
        break;
      case "Uninstall":
        if (newArr[0].includes(newArr[j][1])) {
          for (let i = 0; i < newArr[0].length; i++) {
            if (newArr[0][i] === newArr[j][1]) {
              newArr[0].splice(i, 1);
            }
          }
        }
        break;
      case "Update":
        if (newArr[0].includes(newArr[j][1])) {
          for (let i = 0; i < newArr[0].length; i++) {
            if (newArr[0][i] === newArr[j][1]) {
              newArr[0].splice(i, 1);
            }
          }
          newArr[0].push(newArr[j][1]);
        }
        break;
      case "Expansion":
        let expArr = [];
        expArr = newArr[j][1].split("-");
        if (newArr[0].includes(expArr[0])) {
          for (let i = 0; i < newArr[0].length; i++) {
            if (newArr[0][i] === expArr[0]) {
              newArr[0][i] =
                String(expArr[0]) +
                " " +
                String(expArr[0]) +
                ":" +
                String(expArr[1]);
            }
          }
        }
        break;
      case "Play!":
        console.log(newArr[0].join(" "));
    }
  }
}
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);

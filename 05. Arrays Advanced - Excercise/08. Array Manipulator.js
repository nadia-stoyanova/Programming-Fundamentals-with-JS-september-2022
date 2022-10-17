function arrayManipulator(array, manipulation) {
  let isFinish = false;

  for (let i = 0; i < manipulation.length; i++) {
    let currentArr = [];
    currentArr = manipulation[i].split(" ");

    let command = currentArr[0];
    switch (command) {
      case "add":
        let position = currentArr[1];
        let element = Number(currentArr[2]);
        array.splice(position, 0, element);

        break;

      case "addMany":
        let position1 = Number(currentArr[1]);
        for (let k = 2; k < currentArr.length; k++) {
          array.splice(position1, 0, Number(currentArr[k]));
          position1++;
        }

        break;

      case "contains":
        let elementCon = Number(currentArr[1]);
        if (array.includes(elementCon)) {
          console.log(array.indexOf(elementCon));
        } else console.log(-1);
        break;

      case "remove":
        let element2 = Number(currentArr[1]);
        array.splice(element2, 1);

        break;
      case "shift":
        let position2 = Number(currentArr[1]) - 1;
        for (let m = array.length - 1; m > position2; m--) {
          let el = array.pop();
          array.unshift(el);
        }
        break;

      case "sumPairs":
        let arLen = array.length;
        let printArr = [];
        for (let m = 0; m < arLen - 1; m += 2) {
          let sum = Number(array[m]) + Number(array[m + 1]);
          printArr.push(sum);
        }
        array.splice(-(arLen / 2));
        for (let z = 0; z < arLen / 2; z++) {
          array[z] = printArr[z];
        }

        break;

      case "print":
        isFinish = true;
        console.log(`[ ${array.join(", ")} ]`);
        break;
    }
    if (isFinish) break;
  }
}

arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);

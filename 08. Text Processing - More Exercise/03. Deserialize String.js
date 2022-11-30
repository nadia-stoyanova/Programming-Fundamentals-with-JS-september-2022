function deserializeString(arr) {
  let index = 0;
  let newArr = [];
  let currentEl = arr[index];

  while (currentEl !== "end") {
    let currentArr = arr[index].split(":");
    let stoinost = currentArr[1].split("/");
    for (let index = 0; index < stoinost.length; index++) {
      newArr[stoinost[index]] = currentArr[0];
    }

    index++;
    currentEl = arr[index];
  }

  console.log(newArr.join(""));
}
deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);

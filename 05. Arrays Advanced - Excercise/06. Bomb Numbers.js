function bombNumbers(array, bombArr) {
  let bomb = Number(bombArr[0]);
  let disappear = Number(bombArr[1]);
  let arrr = array

  let i = 0
  while( i < array.length) {
    if (array[i] === bomb) {
      let index = 0;
      let cut = 0;
      if (i - disappear < 0) {
        index = Math.max(0, i - disappear);
      } else {
        index = i - disappear;
      }
       cut = 1 + 2*disappear;
      
      array.splice(index, cut);
      i = 0}
     else {i++}
    }
  
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
   
  }
   console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );

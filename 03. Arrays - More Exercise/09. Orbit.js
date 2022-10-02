function orbit(input) {
  const m = input[0];
  const n = input[1];
  let x = input[2];
  let y = input[3];
  let maxDim = 0;
  m - x >= n - y ? (maxDim = m - x) : (maxDim = n - y);
  if (((m === x+1)||(n === y+1))&&(m>n)) {maxDim = m} else {maxDim = n}

  let arr = new Array(m); // create an empty array of length n
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n); // make each element an array
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === x && j === y) {
        arr[i][j] = 1;
      } else {
        for (let z = 1; z < maxDim; z++) {
          if (i + z === x || i - z === x || j + z === y || j - z === y) {
            arr[i][j] = z + 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    console.log(arr[i].join(" "));
  }
}
orbit([3, 3, 2, 2]);

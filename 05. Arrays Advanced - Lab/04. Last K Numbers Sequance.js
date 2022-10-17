function lastKNumbersSequance(n, k) {
  let sequence = [1];

  for (let i = 1; i < n; i++) {
    let index = Math.max(0, sequence.length - k);

    let lastEl = sequence.slice(index);
    let sum = 0;
    for (let element of lastEl) {
      sum += element;
    }

    sequence.push(sum);
  }

  console.log(sequence.join(" "));
}
lastKNumbersSequance(6, 3);

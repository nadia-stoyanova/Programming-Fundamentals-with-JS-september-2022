function magicSum(array, number) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === number)
          console.log(`${array[i]} ${array[j]}`);
      }
    }
  }
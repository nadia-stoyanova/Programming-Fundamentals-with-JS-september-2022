function evenAndOddSubtraction(array)
{ let sumEvenNum = 0;
    let sumOddNum = 0
    for (let i = 0; i < array.length; i++) {
      array[i] = Number(array[i]);
    }
    for (let num of array) {
      if (num % 2 === 0) {sumEvenNum += num} else {sumOddNum += num}
    }
    console.log(sumEvenNum-sumOddNum);

}
evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])
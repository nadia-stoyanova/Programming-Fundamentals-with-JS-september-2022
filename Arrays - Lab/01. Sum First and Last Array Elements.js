function sumFirstAndLastArrayElements(numbers) {
    let firstArrayElement = numbers[0]
    let lastArrayElement = numbers[numbers.length - 1]
    let sum = firstArrayElement + lastArrayElement
    console.log(sum)
} sumFirstAndLastArrayElements([20, 30, 40])
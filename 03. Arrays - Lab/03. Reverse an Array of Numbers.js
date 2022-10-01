function reverseAnArrayOfNumbers(n, inputArr) {
let newArr = []
for (let i = n - 1; i >= 0; i-- ){
    newArr.push(inputArr[i]) 
}
console.log(newArr.join(" "))
} reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
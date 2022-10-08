function palindromeIntegers(arr) {

for (let i = 0; i < arr.length; i++) {

    let numberAsString = String(arr[i])
     let revStr = numberAsString.split('').reverse().join('')

if (numberAsString === revStr) {
    console.log(true)
} else (console.log(false))
}


} palindromeIntegers([123,323,421,121])
function negativeOrPositiveNumbers(array) {

let newArr = [];
    for(const element of array) {
        let num = Number(element)

        if (num < 0) { newArr.unshift(num)} 
         else {newArr.push(num)}

    }


    for(const element of newArr) {
        console.log(element)
    }

} negativeOrPositiveNumbers(['7', '-2', '8', '9'])
function perfectNumber(number) {
    let divisorsArrSum = 0
    if (number>0 && Number.isInteger(number)) {
for (let i = 1; i <=number/2; i++)
     {  if (number%i === 0) { divisorsArrSum += i}
    }
divisorsArrSum === number ? console.log("We have a perfect number!") : console.log("It's not so perfect.")

    } else {console.log("It's not so perfect.")}

 console.log()
} perfectNumber(500)
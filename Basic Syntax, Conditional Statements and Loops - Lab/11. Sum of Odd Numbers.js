function solve(number) {
    let odd = 1
    let sum = 0
    for (let i = number; i >= 1; i--){
        console.log(odd); 
        sum = sum + odd;
        odd++; odd++;

    }
    console.log(`Sum: ${sum}`)

}
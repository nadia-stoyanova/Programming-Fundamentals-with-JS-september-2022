function nxNMatrix (number) {

   function rowGenerator(number) {
       let singleRow  = ""
        for (let i = 0; i < number; i++) {

singleRow += `${number} `;
        }
        return singleRow
    }
    
    for (let k = 0; k < number; k++) {
    console.log(rowGenerator(number))
    }
}

nxNMatrix(3)
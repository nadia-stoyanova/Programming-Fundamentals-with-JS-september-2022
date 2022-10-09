function pointsValidation(array) {
    let x1 = array[0]
    let y1 = array[1]
    let x2 = array[2]
    let y2 = array[3]
function distanceBetwen2Points (x1, y1, x2, y2){
let distanse = Math.sqrt(Math.pow((x2-x1), 2 )+ Math.pow((y2-y1), 2))
return distanse
}

function validator (x1, y1, x2, y2, boolean) {
    if (boolean) {console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)} 
    else {console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)}
}

validator(x1, y1, 0, 0, Number.isInteger(distanceBetwen2Points(x1, y1, 0, 0)))
validator(x2, y2, 0, 0, Number.isInteger(distanceBetwen2Points(x2, y2, 0, 0)))
validator(x1, y1, x2, y2, Number.isInteger(distanceBetwen2Points(x1, y1, x2, y2)))


} pointsValidation(4) 


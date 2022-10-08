function charactersInRange(firstChar, lastChar) {

let rangeStart = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt())
let rangeEnd = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt())
let resultArr = []
for (let currentChar = rangeStart+1; currentChar < rangeEnd; currentChar++)
{ 
    let singleChar = String.fromCharCode(currentChar)
    resultArr.push(singleChar)


}
console.log(resultArr.join(" "))
} charactersInRange('#',
':'
)

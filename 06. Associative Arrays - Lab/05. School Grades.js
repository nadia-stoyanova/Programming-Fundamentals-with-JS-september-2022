function schoolGrades(input) {
    let result = {}

    for (let line of input) {
let name = line.split(" ").shift()
console.log(name)
let grades = line.split(" ").slice(1).map(Number)
console.log(grades)

if (!result.hasOwnProperty(name)){
    result[name] = grades
} else {
    let exsisting = result[name]
    result[name] = exsisting.concat(grades)
    console.log(result[name])
}
    }


 console.log(Object.values(result))

}






schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])

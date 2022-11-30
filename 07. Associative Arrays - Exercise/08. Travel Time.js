function travelTime(input) {

let countryes = {}

for (const line of input) {
    let country = line.split(" > ")[0]
    let town = line.split(" > ")[1]
    let price = Number(line.split(" > ")[2])

    
if (!countryes[country]) {

    countryes[country] = {[town]: price}

} else {
if (!countryes[country][town]) {
    countryes[country][town] = price
} else 
if (price<countryes[country][town]) {countryes[country][town]= price}

}
}

let sorted = Object.entries(countryes).sort((a,b) => a[0].localeCompare(b[0]))
console.log(sorted[1])
for (const country of sorted) {
let towns = country[1]
let str = ""
let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1])
str +=  
console.log()
    //for (const town in towns) {
   //   str += 
            
        }
   // }
 // console.log(`${country[0]} -> ${country[1]}`)
    
//}


} 
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )
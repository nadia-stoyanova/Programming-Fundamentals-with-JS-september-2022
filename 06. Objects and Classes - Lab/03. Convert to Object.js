function converttoObject(data) {
let info = JSON.parse(data)

for (const key of Object.keys(info)) {

    console.log(`${key}: ${info[key]}`)
}


} converttoObject('{"name": "George", "age": 40, "town": "Sofia"}')
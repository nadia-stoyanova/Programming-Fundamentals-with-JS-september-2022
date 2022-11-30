function converttoJSON(name, lastName, hairColor ) {
    let info = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
        
        }


let text = JSON.stringify(info)
console.log(text)


} converttoJSON('George', 'Jones', 'Brown')
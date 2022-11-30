function serializeString(arrText) {
    
    let obj = {}
    text = arrText[0]

    for (let index = 0; index < text.length; index++) {
        if (!obj.hasOwnProperty(text[index])){
            obj[text[index]] = [index]
        } else { obj[text[index]].push(index)}
    }

for (const key in obj) {
    console.log(`${key}:${obj[key].join("/")}`)
        
    }
}

serializeString(["avjavamsdmcalsdm"])
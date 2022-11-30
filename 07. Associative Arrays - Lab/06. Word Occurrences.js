function word(input) {
    let newMap = new Map();


    for (let token of input) {
        let name = token
        let value = 1
        if (!newMap.has(name)) {
            newMap.set(name, 1)
        } else {
            value = Number(newMap.get(name)); value++;
            newMap.set(name, value)
        }


    }

    let sorted = Array.from(newMap.entries()).sort((a, b) => b[1] - a[1])



    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`)
    }

}
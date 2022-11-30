function makeADictionary(list){
let dictionary = []

    list.forEach(element => { 
        let word = {}
        word = JSON.parse(element)
        let term = (Object.keys(word)).toString()
        let def=Object.values(word).toString()
        let newWord = {
            term: term,
            definition: def
        }
        dictionary.push(newWord)
        
             
    });

    dictionary.sort((a,b) => a.term.localeCompare(b.term) )

    dictionary.forEach(newWord => {
        console.log(`Term: ${newWord.term} => Definition: ${newWord.definition}`)
    })

} makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )
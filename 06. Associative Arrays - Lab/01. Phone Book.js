function PhoneBook(input) {
let result = {}

for (let line of input) {
 let [name, phone] = line.split(" ")
 result[name]= phone
}

for (let name in result) {
    console.log(name, '->', result[name])
}

}  PhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
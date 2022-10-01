function vacation(num, type, day) {
    let price = 0
    if (type === "Students") {
        if (day === "Friday") { price = num * 8.45} 
        if (day === "Saturday") {price = num * 9.8}
        if (day === "Sunday"){price = num * 10.46}
        if (num >= 30) {price = price * 0.85}
    } else if (type === "Business") {
        if (day === "Friday") { price = num * 10.90} 
        if (day === "Saturday") {price = num * 15.60}
        if (day === "Sunday"){price = num * 16}
        if (num >= 100) {price = price - price/num*10}
} else if (type === "Regular") {
    if (day === "Friday") { price = num * 15} 
    if (day === "Saturday") {price = num * 20}
    if (day === "Sunday"){price = num * 22.5}
    if (num >= 10 && num <= 20 ) {price = price *0.95}
}
console.log(`Total price: ${price.toFixed(2)}`)
}
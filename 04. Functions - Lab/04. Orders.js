function orders(product, quantity) {
    let totalPrice = 0
    product === "coffee" ? totalPrice = 1.50 * quantity : ""
    product === "coke" ? totalPrice = 1.40 * quantity : ""
    product === "water" ? totalPrice = 1.00 * quantity : ""
    product === "snacks" ? totalPrice = 2.00 * quantity : ""
    return totalPrice.toFixed(2)
} 
let vv = orders("coffee", 3)
console.log(vv)
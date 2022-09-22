function sortNumbers(num1, num2, num3) {
    let a = num1
    let b = num2
    let c = num3
    let d = ""
  for (let i = 1; i<=3; i++) {
   
     if (a>b) { 
         d = a; a = b; b = d
     } else if (b>c) {
         d=b; b=c; c=d
     } else if (a>b) { d = a; a = b; b = d}
     
 }
     console.log(c)
     console.log(b)
     console.log(a)
 
 } sortNumbers(5, 2, -1)
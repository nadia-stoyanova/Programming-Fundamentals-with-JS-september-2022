function reverseInPlace(array)  {
    let temp = ""
    let arrLength = array.length - 1
    for (let i = 0; i <arrLength/2; i++)
    {temp = array[i]
     array[i] = array[arrLength-i]   
     array[arrLength-i] = temp
     
    }
    console.log(array.join(" "))

} reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])
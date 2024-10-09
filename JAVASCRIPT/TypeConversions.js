let str = '123'
let num = parseInt(str)
console.log(num)

let num1 = 123
let str1 = parseFloat(num1)
console.log(str1)

let str2 = '123'
let num2 = Number(str2)
console.log(num2)

let a = 3
a = 'dilfa'
console.log(a) //correct

var aaa = 5
aaa = 'thayyil' //also correct
console.log(aaa)

const aa = 4
aa = 'dil'  //TypeError: Assignment to constant variable.
console.log(aa)


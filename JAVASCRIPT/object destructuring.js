// const person = {name:"john",age:20}
// const {name,age} = person

// console.log(name)
// console.log(age)


//array destructuring
// let arr = [1,2]
// const [first,second,third] = arr //normal destructuring
// const {first:one,second,third} = arr //default value
// const [first,,third] = arr //leaving blank space
// const [first,...rest] = arr
let a = 1;
let b = 2;
[a,b] = [b,a]
console.log(a)
console.log(b)
//remove last property of an obj
// using built-in methods
const obj = {a:1,b:2,c:3}
const keys = Object.keys(obj)
if(keys.length>0){
    let lastKey = keys[keys.length-1]
    delete obj[lastKey]
}
console.log(obj)
                                                    //using "delete" method in obj
//remove last property of an obj
//without using built-in methods
const obj1 = {a:1,b:2,c:2}
let lastKey
for(let key in obj1){
    lastKey = key
}
delete obj1[lastKey]
console.log(obj1)


//how to find the length of an object
let obj2 = {a:1,b:2,c:3}
let length = Object.keys(obj2).length
console.log(length)
// or
let length1 = Object.entries(obj2).length
console.log(length1)
//or
let length2 = Object.values(obj2).length
console.log(length2)
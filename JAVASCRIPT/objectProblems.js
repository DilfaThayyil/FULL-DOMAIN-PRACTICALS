//remove last property of an obj
const obj = {a:1,b:2,c:3}
// using built-in methods
const keys = Object.keys(obj)
if(keys.length>0){
    let lastKey = keys[keys.length-1]
    delete obj[lastKey]
}
console.log(obj)

// -----------------------------------

//remove last property of an obj
const obj1 = {a:1,b:2,c:2}
//without using built-in methods
let lastKey
for(let key in obj1){
    lastKey = key
}
delete obj1[lastKey]
console.log(obj1)
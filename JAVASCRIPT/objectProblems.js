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



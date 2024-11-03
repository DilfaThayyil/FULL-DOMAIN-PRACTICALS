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

//////////////deepclone of an object

//structured clone()
let obj3 = {
    name: 'Alice', 
    details: { age: 25, city: 'Wonderland' },
    date: new Date(),
}
let clone = structuredClone(obj3)
console.log(clone)

//recursion
function deepClone(obj){
    if(obj===null||typeof obj!=='object'){
        return obj
    }
    if(obj.constructor===Date){
        return new Date(obj.getTime())
    }
    let clone
    if(obj.constructor===Array){
        clone = []
    }else{
        clone = {}
    }
    for(let key in obj){
        if(obj[key]!==undefined&&obj[key]!==null){
            clone[key] = deepClone(obj[key])
        }
    }
    return clone
}
console.log(deepClone(obj3))

//json.parse(json.stringify())
let clone2 = JSON.parse(JSON.stringify(obj3))
console.log(clone2)
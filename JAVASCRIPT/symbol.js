// let symbol1 = Symbol('key1')
// let symbol2 = Symbol('key2')

// let obj = {
//     [symbol1] : 'value1',
//     [symbol2] : 'value2'
// }

// console.log(obj[symbol1])
// console.log(obj[symbol2])


//proxy object
let obj1 = {
    name:'Dilfa',
    age:20
}
let handler = {
    get:function(obj,prop){
        return obj[prop]?obj[prop]:"Property not defined"
    }
}

const proxy = new Proxy(obj1,handler)
console.log(proxy.name)//Dilfa
console.log(proxy.age)//20
console.log(proxy.class)//property not defined
let student = {
    name  : "Dilfa",
    age : 20
}

let handler = {
    get:function(obj,prop){
        return obj[prop]?obj[prop]:"property does not exist"
    }
}
const proxies = new Proxy(student,handler)
console.log(proxies.name)//Dilfa
console.log(proxies.age)//20
console.log(proxies.class)//Property does not exist

// -----------------------------------------------------------

// let student1 = {
//     name : "Dil"
// }
// let handler1 = {}
// const proxies1 = new Proxy(student1,handler1)
// console.log(proxies1.name)//Dil
// console.log(proxies1.age)//undefined

// ----------------------------------------------------------

let student2 = {
    name : "Dilll"
}
let setNewValue = {
    set:function(obj,prop,value){
        return obj[prop] = value
    }
}
const proxy = new Proxy(student2,setNewValue)
proxy.age = 25
console.log(proxy)
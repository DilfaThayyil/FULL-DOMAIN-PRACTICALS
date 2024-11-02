// //callback------------------
// function greet(name,callback){
//     console.log(`Heyy ${name}`)
//     callback()
// }
// function say(){
//     console.log('Goodbye')
// }

// greet('Alice',say)


// //closure------------------
// function counter(){
//     let count = 0
//     return function(){
//         return count++
//     }
// }
// const count = counter()
// console.log(count())
// console.log(count())
// console.log(count())


// //currying------------------
// function multiply(a){
//     return function(b){
//         return a*b
//     }
// }
// const mul = multiply(2)
// console.log(mul(5))
// console.log(mul(7))


// //find second minimum odd number-------------------------------
// let arr = [6,2,3,67,95,5,66,7]
// let result = arr.filter(num => num%2!==0).sort((a,b)=>a-b)[1]
// console.log(result)


// //find last index of particular number--------------------------
// let arr = [2,5,7,4,3,4,6,8,7,8,5,3,2,2,3]
// let lastIndex = arr.lastIndexOf(7)
// console.log(lastIndex)


// //create a promise-------------------------------------------
// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("promise resolved"),1000)
// })
// p.then(data => console.log(data))


// //proxy object--------------------------------
// const obj = {
//     name : 'Dilfa'
// }
// const handler = {
//     get: (obj,prop)=>obj[prop]?obj[prop]:"Property not defined"
// }

// const proxy = new Proxy(obj,handler)
// console.log(proxy.name)
// console.log(proxy.age)


// //some--------------------------------------
// let arr = [1,2,3,4,5]
// console.log(arr.some(num=> num<2))

// //every------------------------------------
// let arr = [2,3,4,5,6]
// console.log(arr.every(num => num<1))


// //create a promise------------------------
// const p1 = new Promise((resolve,reject)=>{
//     return setTimeout(()=>{
//         resolve('promise resolved')
//     },1000)
// })

// p1.then((data)=>console.log(data))


// // create a promise and should resolve the current date----------------------------
// const getCurrentDate = ()=>{
//     return new Promise((resolve)=>{
//         const currentDate = new Date()
//         resolve(currentDate)
//     })
// }
// //store that resolved current date to a file using fs module
// getCurrentDate().then((date)=>writeToFile(date))
// const fs = require('fs')
// const writeToFile = (date)=>{
//     fs.writeFile('currentTime.txt',date.toLocaleTimeString(),(err)=>{
//         if(err){
//             console.log('error writing date to file',err)
//         }else{
//             console.log('date written into file successfully')
//         }
//     })
// }


// //create a server---------------------------------------------------
const express = require('express')
const app = express()
app.use((req,res,next)=>{
    if(req.method==='GET'){
        return res.status(403).json({message:'GET request are blocked'})
    }
    next()
})
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:'This is a get request'
    })
})

app.post('/data',(req,res)=>{
    const datas = req.body
    res.json({
        message:'This is a post request',
        data:datas
    })
})

app.listen(5000,()=>{
    console.log('server listeninnng on port 5000')
})

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.end('Hello world')
// })
// server.listen(3000,()=>{
//     console.log('server listening on port 3000')
// })
 


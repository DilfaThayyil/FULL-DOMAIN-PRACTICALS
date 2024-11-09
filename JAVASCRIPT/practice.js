// // //callback------------------
// // function greet(name,callback){
// //     console.log(`Heyy ${name}`)
// //     callback()
// // }
// // function say(){
// //     console.log('Goodbye')
// // }

// // greet('Alice',say)


// // //closure------------------
// // function counter(){
// //     let count = 0
// //     return function(){
// //         return count++
// //     }
// // }
// // const count = counter()
// // console.log(count())
// // console.log(count())
// // console.log(count())


// // //currying------------------
// // function multiply(a){
// //     return function(b){
// //         return a*b
// //     }
// // }
// // const mul = multiply(2)
// // console.log(mul(5))
// // console.log(mul(7))


// // //find second minimum odd number-------------------------------
// // let arr = [6,2,3,67,95,5,66,7]
// // let result = arr.filter(num => num%2!==0).sort((a,b)=>a-b)[1]
// // console.log(result)


// // //find last index of particular number--------------------------
// // let arr = [2,5,7,4,3,4,6,8,7,8,5,3,2,2,3]
// // let lastIndex = arr.lastIndexOf(7)
// // console.log(lastIndex)


// // //create a promise-------------------------------------------
// // const p = new Promise((resolve,reject)=>{
// //     setTimeout(()=>resolve("promise resolved"),1000)
// // })
// // p.then(data => console.log(data))


// // //proxy object--------------------------------
// // const obj = {
// //     name : 'Dilfa'
// // }
// // const handler = {
// //     get: (obj,prop)=>obj[prop]?obj[prop]:"Property not defined"
// // }

// // const proxy = new Proxy(obj,handler)
// // console.log(proxy.name)
// // console.log(proxy.age)


// // //some--------------------------------------
// // let arr = [1,2,3,4,5]
// // console.log(arr.some(num=> num<2))

// // //every------------------------------------
// // let arr = [2,3,4,5,6]
// // console.log(arr.every(num => num<1))


// // //create a promise------------------------
// // const p1 = new Promise((resolve,reject)=>{
// //     return setTimeout(()=>{
// //         resolve('promise resolved')
// //     },1000)
// // })

// // p1.then((data)=>console.log(data))


// // // create a promise and should resolve the current date----------------------------
// // const getCurrentDate = ()=>{
// //     return new Promise((resolve)=>{
// //         const currentDate = new Date()
// //         resolve(currentDate)
// //     })
// // }
// // //store that resolved current date to a file using fs module
// // getCurrentDate().then((date)=>writeToFile(date))
// // const fs = require('fs')
// // const writeToFile = (date)=>{
// //     fs.writeFile('currentTime.txt',date.toLocaleTimeString(),(err)=>{
// //         if(err){
// //             console.log('error writing date to file',err)
// //         }else{
// //             console.log('date written into file successfully')
// //         }
// //     })
// // }


// // //create a server---------------------------------------------------
// const express = require('express')
// const app = express()
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         return res.status(403).json({message:'GET request are blocked'})
//     }
//     next()
// })
// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.json({
//         message:'This is a get request'
//     })
// })

// app.post('/data',(req,res)=>{
//     const datas = req.body
//     res.json({
//         message:'This is a post request',
//         data:datas
//     })
// })

// app.listen(5000,()=>{
//     console.log('server listeninnng on port 5000')
// })

// // const http = require('http')
// // const server = http.createServer((req,res)=>{
// //     res.end('Hello world')
// // })
// // server.listen(3000,()=>{
// //     console.log('server listening on port 3000')
// // })
 


//api endpoint to divide 2 numbers
// const express = require('express')
// const app = express()
// const PORT = 3000

// app.use(express.json())

// app.post('/',(req,res)=>{
//     const {numerator,denominator} = req.body
//     if(denominator===0){
//         return res.status(400).json({'cant divide a number by zero'})
//     }
//     const result = numerator/denominator
//     res.json({result})
// })

// app.listen(PORT,()=>{
//     console.log(`server running at http://localhost:${PORT}`)
// })

// -----------------------------------------------

// //remove last key value from an object
// let obj = {
//     name:"DIlfa",
//     age:20
// }
// function removeLastKey(obj){
//     let lastKey
//     for(let key in obj){
//         lastKey = key
//     }
//     if(lastKey){
//         delete obj[lastKey]
//     }
//     return obj
// }
// console.log(removeLastKey(obj))

// --------------------------------------------------

// //reverse even numbers with 1 sec delay
// function* reversedEven(n){
//     for(let i=n;i>=0;i-=2){
//         yield i
//     }
// }
// async function print(n){
//     const generator = reversedEven(n)
//     for(let num of generator){
//         console.log(num)
//         await new Promise((resolve)=>setTimeout(resolve,1000))
//     }
// }
// print(10)

// ---------------------------------------------------

// //yield numbers from a 2D array
// function* gen(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             yield arr[i][j]
//         }
//     }
// }
// let arr = [[1,2],[3,4],[5,6]]
// const gener = gen(arr)
// for(let num of gener){
//     console.log(num)
// }




//sum of array
// function sum(arr){
//     let sum = arr.reduce((acc,curr)=>{
//         return acc+=curr
//     },0)
//     return sum
// }
// let arr = [1,2,3,4,5]
// console.log(sum(arr))
// ------------------------------------------
// //sum of array using recursion
// function sum(arr){
//     if(arr.length===0){
//         return 0
//     }
//     return arr[0]+sum(arr.slice(1))
// }
// console.log(sum([1,2,3,4]))
// ------------------------------------------
//reversing an array
// function reverse(arr){
//     let left = 0
//     let right = arr.length-1
//     while(left<right){
//         let temp =  arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         left++
//         right--
//     }
//     return arr
// }
// let arr = [5,6,7]
// console.log(reverse(arr))
// -------------------------------------------
//reverse an array using recursion
// function reverse(arr,left=0,right=arr.length-1){
//     if(left>=right){
//         return arr
//     }
//     [arr[left],arr[right]] = [arr[right],arr[left]]
//     return reverse(arr,left+1,right-1)
// }
// let arr = [1,2,3,4]
// console.log(reverse(arr))
// -------------------------------------------
//move all zero elements into rightSide
// function moveZero(arr){
//     let j = 0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             arr[j] = arr[i]
//             j++
//         }
//     }
//     for(let i=j;i<arr.length;i++){
//         arr[i] = 0
//     }
//     return arr
// }

// let arr = [1,0,3,0,0,5]
// console.log(moveZero(arr))
// -------------------------------------------
//findLargestThree elements from an array
// function findLargestThree(arr){
//     let first = -Infinity
//     let second = -Infinity
//     let third = -Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>first){
//             third = second
//             second = first
//             first = arr[i]
//         }else if(arr[i]>second && arr[i]!==first){
//             third = second
//             second = arr[i]
//         }else if(arr[i]>third && arr[i]<second){
//             third = arr[i]
//         }
//     }
//     return [first,second,third]
// } 
// let arr = [5,2,9,0,4,1,6]
// console.log(findLargestThree(arr))
// --------------------------------------------
//find secondLargest & secondSmallest
// function secondLargest(arr){
//     let largest = -Infinity
//     let secLargest = -Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secLargest = largest
//             largest = arr[i]
//         }else if(arr[i]>secLargest&&arr[i]!==largest){
//             secLargest = arr[i]
//         }
//     }
//     return secLargest
// }
// function secondSmallest(arr){
//     let smallest = Infinity
//     let secSmallest = Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest = arr[i]
//             secSmallest = smallest
//         }else if(arr[i]<secSmallest&&arr[i]!==smallest){
//             secSmallest = arr[i]
//         }
//     }
//     return secSmallest
// }
// let arr = [4,2,8,0,1,6]
// console.log(secondLargest(arr))
// console.log(secondSmallest(arr))
// --------------------------------------
//secondLargest & secondSmallest using reduce
// function secondLargest(arr){
//     let result = arr.reduce((acc,curr)=>{
//         if(curr>acc.largest){
//             acc.secLargest = acc.largest
//             acc.largest = curr
//         }else if(curr>acc.secLargest&&curr!==acc.largest){
//             acc.secLargest = curr
//         }
//         return acc
//     },{largest:-Infinity,secLargest:-Infinity})
//     return result
// }
// function secondSmallest(arr){
//     let result = arr.reduce((acc,curr)=>{
//         if(curr<acc.smallest){
//             acc.secSmallest = acc.smallest
//             acc.smallest = curr
//         }else if(curr<acc.secSmallest&&curr!==acc.smallest){
//             acc.secSmallest = curr
//         }
//         return acc
//     },{smallest:Infinity,secSmallest:Infinity})
//     return result
// }
// let arr = [5,2,9,7,1,0,3]
// console.log(secondLargest(arr))
// console.log(secondSmallest(arr))
// --------------------------------------
// let arr = [[1,2],[3,4],[5,6]]
//flatten 2D array
// function flatten(arr){
//     let result = []
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             result.push(arr[i][j])
//         }
//     }
//     return result
// }
// console.log(flatten(arr))
// //yield numbers from a 2D array
// function* yieldNumbers(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             yield arr[i][j]
//         }
//     }
// }
// const generator = yieldNumbers(arr)
// for(const num of generator){
//     console.log(num)
// }
// ---------------------------------
//fibonacci
function fibonacci(arr){
    
}
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
//fibonacci series using recursion
// function fibonacci(n){
//     if(n===0){
//         return 0
//     }else if(n===1){
//         return [0,1]
//     }
//     let series = fibonacci(n-1)
//     series.push(series[n-1]+series[n-2])
//     return series
// }
// // ---------------------------------
// //fibonacci series
//     function fibonacc(n){
//         let fib = [0,1]
//         for(let i=2;i<=n;i++){
//             fib[i] = fib[i-1]+fib[i-2]
//         }
//         return fib
//     }
// // -----------------------------------
// //fibonacci of nth number
//     function fib(n){
//         if(n<2){
//             return n
//         }
//         return fib(n-1)+fib(n-2)
//     }
//     console.log(fibonacci(5))
//     console.log(fibonacc(5))
//     console.log(fib(5))
// // ----------------------------------
// //factorial using recursion
//     function factorial(n){
//         if(n<=1){
//             return n
//         }
//         return n*factorial(n-1)
//     }
// // -----------------------------------
// //factorial of nth number
//     function fact(n){
//         let result = 1
//         for(let i=2;i<=n;i++){
//             result = result*i
//         }
//         return result
//     }
//     console.log(factorial(5))
//     console.log(fact(5))
// // ---------------------------------
// //recursive binary search
// function binarySearch(arr,target,left=0,right=arr.length){
//     while(left<right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid]===target){
//             return mid
//         }else if(target>arr[mid]){
//             return binarySearch(arr,target,mid+1,right)
//         }else{
//             return binarySearch(arr,target,left,mid-1)
//         }
//     }
//     return -1
// }
// //binary search
// function binarySearch(arr,target,left=0,right=arr.length){
    
// }
// let index = binarySearch([2,3,4,5,6],6)
// console.log(index)



// --------------------------------------------------------------------
// //callback hell
// function fetchData(callback){
//     setTimeout(()=>{
//         callback(null,'data fetched')
//     },1000)
// }
// function processData(data,callback){
//     setTimeout(()=>{
//         callback(null,`data processed , ${data}`)
//     },1000)
// }
// function saveData(data,callback){
//     setTimeout(()=>{
//         callback(null,`data saved , ${data}`)
//     },1000)
// }

// fetchData((err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     processData(data,(err,processedData)=>{
//         if(err){
//             console.error(err)
//             return
//         }
//         saveData(processedData,(err,savedData)=>{
//             if(err){
//                 console.error(err)
//                 return
//             }
//             console.log(savedData)
//         })
//     })
// })

// //promise based code

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('data fetched')
//         },1000)
//     })
// }
// function processData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`data processed , ${data}`)
//         },1000)
//     })
// }
// function saveData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`data saved , ${data}`)
//         },1000)
//     })
// }

// fetchData()
// .then((data)=>processData(data))
// .then((processData)=>saveData(processData))
// .then((saveData)=>console.log(saveData))
// .catch((err)=>console.error(err))

// ----------------------------------------------------------
// let curr = this.head
// let prev = null
// while(curr){
//     let next = curr.next
//     curr.next = prev
//     prev = curr
//     curr = next
// }
// this.head = prev

// ---------------------------------------------------------------

// let arr = [98,45,12,09,45]
//     let result = arr.reduce((acc,curr)=>{
//         if(curr>acc.largest){
//             acc.secLargest = acc.largest
//             acc.largest = curr
//         }else if(curr<acc.largest && curr>acc.secLargest){
//             acc.secLargest = curr
//         }
//         return acc
//     },{largest:-Infinity,secLargest:-Infinity})

// console.log(result)

// -------------------------------------------------------
//reverse string using another string

// let str = 'dilfa'
// function manual(str){
//     let reversed = ''
//     for(let i=Math.floor(str.length-1);i>=0;i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(str)
// console.log(manual(str))

// // --------------------------
//reverse string using recursion

// function recurse(str){
//     if(str===''){
//         return ''
//     }
//     return recurse(str.slice(1))+str[0]
// }
// console.log(str)
// console.log(recurse(str))

// //--------------------------
//reverse string using built-in method

// function buitIn(str){
//     return str.split('').reverse().join('')
// }
// console.log(str)
// console.log(buitIn(str))

// -----------------------------------------------------------
//isPalindrome of string using another string

// let str1 = "A man, a plan, a canal, Panama"
// let str2 = 'dilfa'
// function isPalindrome(str){
//     let normal = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let reversed = ''
//     for(let i=normal.length-1;i>=0;i--){
//         reversed += normal[i]
//     }
//     return normal===reversed
// }

// console.log(isPalindrome(str2))
// ------------------------------------------------------------
//isPalindrome of number by converting to string

// let num = 121
// function isPalindrome(num){
//     let string = num.toString()
//     let reversed = string.split('').reverse().join('')
//     return string===reversed
// }

// console.log(isPalindrome(num))

// -------------------------------------------------------
//isPalindrome of string using recursion

// let str = 'abvcba'
// function check(str,s=0,e=str.length-1){
//     if(s>e){
//         return true
//     }
//     if(str[s]!==str[e]){
//         return false
//     }
//     return check(str,s+1,e-1)
// }
// console.log(check(str))

// --------------------------------------------------------
//find sum of digits without converting into string

// let digits = 1234
// function sum(digits){
//     let sum = 0
//     while(digits>0){
//         let lastDigit = digits%10 
//         sum+=lastDigit 
//         digits = Math.floor(digits/10) 
//     }
//     return sum
// }
// console.log(sum(digits))

// --------------------------------------------------------

//isPalindrome digits without converting into string
// let digits = 124321
// function isPalindrome(digits){
//     if(digits<0){
//         return false
//     }
//     let reversed = 0
//     let original = digits
//     while(digits>0){
//         let lastDigit = digits%10 
//         reversed = reversed*10+lastDigit
//         digits = Math.floor(digits/10)
//     }
//     return original===reversed
// }
// console.log(isPalindrome(digits))
// --------------------------------------------------------

// let str = ["eat","tea","tan","ate","nat","bat"]

// function groupAnagrams(str){
//         let map = new Map()
//         let sorted
//         for(let word of str){
//             sorted = word.split('').sort().join('')
//             if(!map.has(sorted)){
//                 map.set(sorted,[])
//             }
//             map.get(sorted).push(word)
//         }
//     return Array.from(map.values())
// }
// console.log(groupAnagrams(str))

// --------------------------------------------------------
//find sum of digits withtout converting into string
// let digits = 1234
// function sum(digits){
//     let sum = 0
//     while(digits>0){
//         let lastDigit = digits%10
//         sum += lastDigit
//         digits = Math.floor(digits/10)
//     }
//     return sum
// }
// console.log(sum(digits))
//string isPalindrome using recursion
// function isPal(str,a=0,b=str.length-1){
//     if(a>b){
//         return true
//     }else if(str[a]!==str[b]){
//         return false
//     }
//     return isPal(str,a+1,b-1)
// }
// let str = 'abcdba'
// console.log(isPal(str))

//string reverse using recursion
// function recurse(str){
//     if(str===''){
//         return ''
//     }
//     return recurse(str.slice(1))+str[0]
// }
// let str = 'shibil'
// console.log(recurse(str))

//string reverse 
// function reverse(str){
//     let reversed = ''
//     for(let i=str.length-1;i>=0;i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// let s = 'dilfa'
// console.log(reverse(s))

// -----------------------------------------------------
//string reverse using 2 pointer method
// function reverse(str){
//     let left = 0
//     let right = str.length-1
//     let arr = []
//     for(let i=0;str[i]!==undefined;i++){
//         arr[i] = str[i]
//     }
//     while(left<right){
//         let temp  = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         left++
//         right--
//     }
//     let reversed = ''
//     for(let i=0;arr[i]!==undefined;i++){
//         reversed += arr[i]
//     }
//     return reversed
// }
// let s = 'aflid'
// console.log(reverse(s))

// ---------------------------------------------------------
//remove vowels from a string
// function removeVowels(str){
//     let vowels = ['a','e','i','o','u']
//     let removed = ''
//     for(let i=0;i<str.length;i++){
//         if(!vowels.includes(str[i])){
//             removed+=str[i]
//         }
//     }
//     return removed
// }

// let str = 'dilfa'
// console.log(removeVowels(str))

// -----------------------------------------------------------
// remove vowels without inbuild method
// function remove(str){
//     let removed = ''
//     for(let i=0;i<str.length;i++){
//         if(str[i]!=='a'&&str[i]!=='e'&&str[i]!=='i'&&str[i]!=='o'&&str[i]!=='u'){
//             removed+=str[i]
//         }
//     }
//     return removed
// }

// console.log(remove("shibilshibil"));

// -------------------------------------------------------

//extract digit from a string
// function extract(str){
//     let extracted = ''
//     for(let i=0;i<str.length;i++){
//         if(str[i]>='0'&&str[i]<='9'){
//             extracted += str[i]
//         }
//     }
//     return extracted
// }
// console.log(extract('1h2e3l4l5o'))
// ------------------------------------------------------------
//convert comma separated values into array
// function intoArr(str){
//     return str.split(',')
// }
// let s = 'd,i,l,f,a'
// console.log(intoArr(s))
// -------------------------------------------------------------
//fn to ensure string ends with a period
// function endsWith(str){
//     if(str.endsWith('.')){
//         return str
//     }else{
//         return str+='.'
//     }
// }
// console.log(endsWith('fillll'))
// --------------------------------------------------------
//convert comma seapratd values into array without built-in method
// function convertCSVToArray(csv) {
//     let result = [];
//     let value = '';
//     for (let i = 0; i < csv.length; i++) {
//         if (csv[i] === ',') {
//             result.push(value);
//             value = ''; 
//         } else {
//             value += csv[i];
//         }
//     }
//     result.push(value);
//     return result;
// }
// console.log(convertCSVToArray('d,i,l,f,a'))
// -----------------------------------------------------
//fn to ensure string ends with a period without built-in
// function endsWith(str){
//     if(str[str.length-1]==='.'){
//         return str
//     }else{
//         return str+='.'
//     }
// }
// console.log(endsWith('dil.'))
// --------------------------------------------------------------
//find the occurrence of elements in an array
// function occurrence(arr){
//     let count = {}
//     for(let value of arr){
//         count[value] = (count[value]||0)+1
//     }
//     return count
// }
// console.log(occurrence([1,4,2,1,5,3,6,2,4,3]))
// --------------------------------------------------------
//find count of each +ve,-ve,zero values from individual array
// let a = [[4,-5,0,1,-4],[9,-1,2,-6],[-8,0,2]]
// let result = a.map((subArray)=>{
//    let p=0,n=0,z=0
//       subArray.forEach((num)=>{
//         if(num>0){
//             p++
//         }else if(num<0){
//             n++
//         }else{
//             z++
//         }
//     })
//     return {p,n,z}
// })
// console.log(result)
// -------------------------------------------------------
// find sum of digits from the array
let a = [[{a:[1,1,1]}],[{b:[1,1,1]}],[{c:[1,1,1]}]]
let totalSum = 0
a.forEach((subArray)=>{
    subArray.forEach((obj)=>{
        for(let key in obj){
            totalSum += obj[key].reduce((sum,val)=>sum+=val,0)
        }
    })
})
console.log(totalSum)
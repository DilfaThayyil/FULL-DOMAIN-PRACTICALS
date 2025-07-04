///////////////////////////////////////////////////////////////////////////
// const fs = require('fs')
// function main(){
//     return new Promise((resolve,reject)=>{
//         const currentDate = new Date()
//         resolve(currentDate.toDateString())
//     })
// }
// main()
// .then((currentDate)=>{
//     fs.writeFile('promise.txt',currentDate,(err)=>{                          //promise into file
//         if(err){
//             console.log(`error writing into file ${err}`)
//         }else{
//             console.log('written into file successfully')
//         }
//     })
// })
// .catch((err)=>{
//     console.log(`error occurred ${err}`)
// })

//////////////////////////////////////////////////////////////////////////////

// const http = require('http')
// const PORT = 3000
// const server = http.createServer((req,res)=>{
//     res.end('hellooooo')
// })
// server.listen(PORT,()=>{
//     console.log('server listeing on port http://localhost:3000')
// })


// const express = require('express')
// const app = express()
// const port = 4000

// app.use(morgan('dev'))
// app.use(express.json())
// app.use(express.static('public'))                                                   //express server
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         return res.status(403).json({message:'GET requests are blocked'})
//     }
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send('welcome to home page')
// })
// app.post('/data',(req,res)=>{
//     res.status(200).json({message:'data recieved successfully',data:req.body})
// })
// app.use((err,req,res,next)=>{
//     console.error(err)
//     res.status(500).json({message:'internal server error'})
// })
// app.listen(port,()=>{
//     console.log(`server lsteing on http://localhost:${port}`)
// })

///////////////////////////////////////////////////////////////////////////

// const express = require('express')
// const app = express()
// const port = 5000

// app.use(express.json())
// app.post('/divide',(req,res)=>{
//     const {numerator,denominator} = req.body
//     if(numerator===undefined||denominator===undefined){
//         return res.status(400).json({message:'values are required'})
//     }
//     if(typeof numerator!=='number'||typeof denominator!=='number'){
//         return res.status(400).json({message:'values should be numbers'})           //api endpoint dividing 2 numbers
//     }
//     if(denominator===0){
//         return res.status(400).json({message:'denominator cant be zero'})
//     }
//     let result = numerator/denominator
//     res.status(200).json({message:'result received successfullt',data:result})
// })
// app.listen(port,()=>{
//     console.log(`server listening on http://localhost:${port}`)
// })
////////////////////////////////////////////////////////////////////////
// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// emitter.on('greet',()=>{
//     console.log('hello from Dilfaaaa.....!!')
// })                                                                           //event emitter
// emitter.emit('greet')
// emitter.on('sum',(a,b)=>{
//     console.log(`The sum is ${a+b}`)
// })
// emitter.emit('sum',10,20)
///////////////////////////////////////////////////////////////////////
// const fs = require('fs')
// const readableStreams = fs.createReadStream('abc.txt','utf-8')
// readableStreams.on('data',(chunk)=>{
//     console.log('received data ',chunk)
// })
// readableStreams.on('end',()=>{
//     console.log('finished reading')
// })

// const fs = require('fs')
// const writableStreams = fs.createWriteStream('ouput.txt')
// writableStreams.write('Hello')
// writableStreams.end()
// writableStreams.on('finish',()=>{
//     console.log('finished writing into file')
// })
///////////////////////////////////////////////////////////////////////

// app.use('/secure-route',(req,res,next)=>{
//     const token = req.headers['authentication']
//     if(token==='valid-token'){
//         next()
//     }
//     res.status(403).send('token is not found')
// })

////////////////////////////////////////////////////////////////////////

// //do numbers have prototype
// // Number.prototype.myMethod = function(){
// //     return this.value()/2
// // }
// // let a = 10
// // let b = a.myMethod()
// // console.log(b)

// let sentence = "i love eating burger", searchWord = "burg"
// function getIndex(sentence,searchWord){
//     let words = sentence.split(' ')
//     for(let i=0;i<words.length;i++){
//         let word = words[i]
//         let isPrefix = true
//         for(let j=0;j<searchWord.length;j++){
//             if(j>=word.length||word[j]!==searchWord[j]){
//                 isPrefix = false
//                 break
//             }
//         }
//         if(isPrefix){
//             return i+1
//         }
//     }
//     return -1
// }
// console.log(getIndex(sentence,searchWord))
/////////////////////////////////////////////////////////////
// let ref = new WeakRef()
// ref.set({name:'abc'})
// console.log(ref)
// let obj = {name : 'abc'}
// let obj2  = obj
// obj2.name = 'dil'
// console.log(obj)
// console.log(obj2)

// // yield elements from a multidimensional array
// function* gener(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             yield arr[i][j]
//         }
//     }
// }
// let arr = [[1,2],[3,4],[5,6]]
// let elem = gener(arr)
// let result = elem.next()
// while(!result.done){
//     console.log(result.value)
//     result = elem.next()
// }


//find largest digit from a number
// let digits = 528159362485
// //1 - converting into string
// function larg(digits){
//     let split = digits.toString().split('')
//     let largest = 0
//     largest = Math.max(...split.map(Number))
//     return largest
// }
// console.log(larg(digits))

// //2 - without converting into string
// function large(digits){
//     digits = Math.abs(digits)
//     let largest = 0
//     while(digits>0){
//         let digit = digits%10
//         if(digit>largest){
//             largest = digit
//         }
//         digits = Math.floor(digits/10)
//     }
//     return largest
// }
// console.log(large(digits))


//async await 
// // with await
// function aa(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('resolved...')
//         },2000)
//     })
// }
// async function abc(){
//     console.log('async..')
//     let result = await aa()
//     console.log(result)
// }
// abc()

// // without await
// async function abc(){
//     console.log('This is synchronous fn within async')
//     return 'async'
// }
// abc().then(console.log)

//can we use async without await??
//can we use finally without catch??
// try{
//     console.log('This is a try block')
// }finally{
//     console.log('this is a finally block')
// }


//------------------------------------reverse array
///////////////////////////////////normal method
// let arr = [4,2,7,3,5,1]
// let reversed = []
// for(let i=arr.length-1;i>=0;i--){
//     reversed.push(arr[i])
// }
// console.log(reversed)
//////////////////////////////////2 pointer method
// let left = 0
// let right = arr.length-1
// while(left<right){
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left++
//     right--
// }
// console.log(arr)
//////////////////////////////////recursion
// function reverse(arr,left=0,right=arr.length-1){
//     if(left>right){
//         return arr
//     }
//     [arr[left],arr[right]] = [arr[right],arr[left]]
//     return reverse(arr,left+1,right-1)
// }
// console.log(reverse(arr))

// ----------------------------------reverse string
//////////////////////////////////normal method
// let s = 'life is beautiful'
// let reversed = ''
// for(let i=s.length-1;i>=0;i--){
//     reversed += s[i]
// }
// console.log(reversed)
///////////////////////////////////2 pointer method
// let s = s1.split('')
// let left = 0
// let right = s.length-1
// while(left<right){
//     let temp = s[left]
//     s[left] = s[right]
//     s[right] = temp
//     left++
//     right--
// }
// s1 = s.join('')
// console.log(s1)
///////////////////////////////////recursion
// function reverse(s,left=0,right=s.length-1){
//     let arr = s.split('')
//     if(left>right){
//         return s
//     }
//     [arr[left],arr[right]] = [arr[right],arr[left]]
//     s = arr.join('')
//     return reverse(s,left+1,right-1)
// }
// console.log(reverse(s))
//////////////////////////////////reverse individually
// function reverse(s){
//     let reversed = ''
//     let split = s.split(' ')
//     for(let i=0;i<split.length;i++){
//         let re = ''
//         for(let j=split[i].length-1;j>=0;j--){
//             re += split[i][j]
//         }
//         reversed += re
//         if(i<re.length){
//             reversed += ' '
//         }
//     }
//     return reversed
// }
// console.log(reverse(s))
//////////////////////////////////built-in method
// let split = s.split('').reverse().join('')
// console.log(split)
/////////////////////////////////output is reversed digits in arr
// let arr = [436, 745]
// // output should be [547, 634]
// let result = []
// for(let i=arr.length-1;i>=0;i--){
//     let digits = arr[i]
//     let reversed = ''
//     while(digits>0){
//         let digit = digits%10
//         reversed += digit
//         digits = Math.floor(digits/10)
//     }
//     result.push(parseInt(reversed))
// }
// console.log(result)
//////////////////////////////output is reversed string in arr

/////////////////////////////no.of days
// no.of days untill 2025
// let today = new Date()
// let target = new Date('2025-01-01')
// let difference = target-today
// let inDays = Math.ceil(difference/(1000*60*60*24))
// console.log(`number of days untill 2025 : ${inDays}`)

////////////////////////////extract from string
// let s = 'trtteeeey'
// function longestCharacter(s){
//     let currChar = ''
//     let currLen = 0
//     let maxChar = ''
//     let maxLen = 0
//     for(let i=0;i<s.length;i++){
//         if(s[i]===currChar){
//             currLen++
//         }else{
//             if(currLen>maxLen){
//                 maxLen = currLen
//                 maxChar = currChar
//             }
//             currChar = s[i]
//             currLen = 1
//         }
//     }
//     if(currLen>maxLen){
//         maxLen = currLen
//         maxChar = currChar
//     }
//     return maxChar.repeat(maxLen)
// }
// console.log(longestCharacter(s))
// // output = eeee
////////////////////////////////////////////////////////////////////
// //  generator function to print multiples of 5 between 1-100 in reverse order
// function* mulFive(){
//     for(let i=100;i>=0;i--){
//         if(i%5===0){
//             yield i
//         }
//     }
// }
// function print(){
//     const gen = mulFive()
//     const intervalId = setInterval(()=>{
//         let result = gen.next()
//         if(!result.done){
//             console.log(result.value)
//         }else{
//             clearInterval(intervalId)
//         }
//     },1000)
// }
// print()
///////////////////////////////////////////////////////////////////////
// //print from 10-1 in interval of 1s
// let count = 10
// const intervalId = setInterval(()=>{
//     console.log(count)
//     count--
//     if(count===0){
//         clearInterval(intervalId)
//     }
// },1000)
////////////////////////////////////////////////////////////////////
// //sort a string based on occurrence
// let s = 'abcaab'
// // output = 'aaabbc'
// let obj = {}
// for(let char of s){
//     obj[char] = (obj[char]||0)+1
// }
// console.log(obj)
// s = s.split('')
// console.log(s)
// s = s.sort((a,b)=>{
//     if(obj[a]!==obj[b]){
//         return obj[b]-obj[a]
//     }
//     return a.charCodeAt(0)-b.charCodeAt(0)
// })
// console.log(s)
// s = s.join('')
// console.log(s)
//////////////////////////////////////////////////////////////////////
// // palindrome recursion
// function check(s,left=0,right=s.length-1){
//     if(left>right){
//         return true
//     }
//     if(s[left]!==s[right]){
//         return false
//     }
//     return check(s,left+1,right-1)
// }
// console.log(check('ab1cc1ba'))
//////////////////////////////////////////////////////////////////////
// //dfs in graph
// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2)&&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let neighbour of this.adjacencyList[vertex]){
//             this.removeEdge(neighbour)
//         }
//         delete this.adjacencyList[vertex]
//     }
//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex,'=>',[...this.adjacencyList[vertex]])
//         }
//     }
//     dfs(start){
//         let stack = [start]
//         let visited = new Set()
//         while(stack.length>0){
//             let vertex = stack.pop()
//             if(!visited.has(vertex)){
//                 console.log(vertex)
//                 visited.add(vertex)
//                 stack.push(...this.adjacencyList[vertex])
//             }
//         }
//     }
//     bfs(start){
//         let queue = [start]
//         let visited = new Set()
//         while(queue.length>0){
//             let vertex = queue.shift()
//             if(!visited.has(vertex)){
//                 console.log(vertex)
//                 visited.add(vertex)
//                 queue.push(...this.adjacencyList[vertex])
//             }
//         }
//     }
//     hasCycle(){
//         let visited = new Set()
//         const dfsCycle = (vertex,parent)=>{
//             visited.add(vertex)
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     if(dfsCycle(neighbour,vertex)){
//                         return true
//                     }
//                 }else if(neighbour!==parent){
//                     return true
//                 }
//             }
//             return false
//         }
//         for(let vertex in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 if(dfsCycle(vertex,null)){
//                     return false
//                 }
//             }
//         }
//     }
//     countCycle(){
//         let visited = new Set()
//         const dfsCycle = (vertex,parent)=>{
//             visited.add(vertex)
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     if(dfsCycle(neighbour,vertex)){
//                         return true
//                     }
//                 }else if(neighbour!==parent){
//                     return true
//                 }
//             }
//             return false
//         }
//         for(let vertex in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 if(dfsCycle(vertex,null)){
//                     return false
//                 }
//             }
//         }
//     }
// }

// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','B')
// graph.addEdge('B','C')
// graph.addEdge('C','D')
// graph.addEdge('D','A')
// graph.display()
// console.log('dfs : ')
// graph.dfs('A')
// console.log('bfs : ')
// graph.bfs('A')
/////////////////////////////////////////////////////////////////////
// node write file and delete

// const fs = require('fs')
// let content = 'dilfa thayyil'
// fs.writeFile('example.txt',content,(err)=>{
//     if(err){
//         console.log('error writing into file')
//     }else{
//         console.log('successfully wrote into file')
//     }
// })
// fs.unlink('example.txt',(err)=>{
//     if(err){
//         console.log('error deleting file')
//     }else{
//         console.log('deleted file successfully')
//     }
// })

//////////////////////////////////////////////////////////


// const fs = require('fs')
// function main(){
//     return new Promise((resolve=>{
//         const currentDate = new Date()
//         resolve(currentDate.toDateString())
//     }))
// }
// main()
// .then((currentDate)=>{
//     fs.writeFile('promise.txt',currentDate,(err)=>{
//         if(err){
//             console.log('error wiring into file')
//         }else{
//             console.log('written into file successfully')
//         }
//     })
// })
// .catch((err)=>{
//     console.log('error occurred : ',err)
// })




// const port = 8000
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.end('helll No')
// })
// .listen(port,()=>{
//     console.log(`server listening on port http://localhost:${port}`)
// })



// const express = require('express')
// const app = express()
// const port = 8000
// app.use(morgan('dev'))
// app.use(express.json())
// app.use(express.static('public'))
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         return res.status(403).json({message:'GET requests are blocked'})
//     }
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send('welcome to home page')
// })
// app.post('/data',(req,res)=>{
//     res.status(200).json({message:'data received success'})
// })
// app.use((err,req,res,next)=>{
//     res.status(500).json({message:'Internal server error'})
// })
// app.listen(port,()=>{
//     console.log(`server listening on http://localhost:${port}`)
// })




//////////////////////////////////////////////////



// const express = require('express')
// const app = express()
// const port = 3001
// app.use(express.json())
// app.post('/divide',(req,res)=>{
//     const {numerator,denomenator} = req.body
//     if(numerator===undefined||denomenator===undefined){
//         return res.status(400).json({message:'values are required'})
//     }
//     if(typeof numerator!=='number'||typeof denomenator!=='number'){
//         return res.status(400).json({message:'values should be number'})
//     }
//     if(denomenator===0){
//         return res.status(400).json({message:'denomenator shouldnot be zero'})
//     }
//     let result = numerator/denomenator
//     res.status(200).json({message:'result received successfully',data:result})
// })
// app.listen(port,()=>{
//     console.log(`server listening on http://localhost:${port}`)
// })



/////////////////////////////////////////////////////////


const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('greet',()=>{
    console.log('hello from Dilfaaaa...!')
})
emitter.emit('greet')
emitter.on('sum',(a,b)=>{
    console.log(`The sum is ${a+b}`)
})
emitter.emit('sum',10,20)
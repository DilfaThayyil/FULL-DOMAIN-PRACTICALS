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

const express = require('express')
const app = express()

         
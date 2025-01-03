// const express = require('express')
// const app = express()
// const fs = require('fs')
// const PORT = 3000

// const getCurrentDate = ()=>{
//     return new Promise((resolve)=>{
//         const currentDate = new Date()
//         resolve(currentDate)
//     })
// }
// const writeIntoFile = ((date)=>{
//     fs.writeFile('currentTime.txt',date.toLocaleDateString(),(err)=>{
//         if(err){
//             console.log('error wrting date into file')
//         }else{
//             console.log('time written into file successfully')
//         }
//     })
// })
// app.get('/',(req,res)=>{
//     getCurrentDate().then((date)=>{
//         writeIntoFile(date)
//         res.send('date written into file successfully')
//     }).catch((err)=>{
//         res.status(500).send('error writing into file')
//         console.log('promise rejection',err)
//     })
// })

// app.listen(PORT,()=>{
//     console.log(`server is listening on http://localhost:${PORT}`)
// })


// ----------------------------------------------------------------------



// const express = require('express')
// const app = express()
// const PORT = 3000

// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         return res.status(403).send('Get requests are blocked')
//     }
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send('this route cant be accessible')
// })
// app.listen(PORT,()=>{
//     console.log(`server listeing on http://localhost:${PORT}`)
// })


// ----------------------------------------------------------------------


//event emitter

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// emitter.on('DataReceived',(data)=>{
//     console.log(`data is received : ${data}`)
// })
// emitter.emit('DataReceived','You are in the right path girl..')


//--------------------------------------------------------------------------


// //readable streams

// const fs = require('fs')

// const readableStream = fs.createReadStream('example.txt',{encoding:'utf8'})
// readableStream.on('data',(chunk)=>{
//     console.log('received chunk: ',chunk)
// })
// readableStream.on('end',()=>{
//     console.log('no more data')
// })
// readableStream.on('error',(error)=>{
//     console.error('error : ',error)
// })


// --------------------------------------------------------------------------


// // application middleware
// const express = require('express')
// const app = express()

//error handling middleware
// app.use((req,res,next,err)=>{
//     console.error("error :",err)
//     res.status(500).send('internal server error')
// })

//router level middleware
// app.get('/',(req,res)=>{
//     res.send('Hello world!')
// })

// middleware to check for token in req headers
// app.use((req,res,next)=>{
//     if(req.headers['authToken']){
//         console.log('token found')
//         next()
//     }else{
//         res.status(403).send('forbidden : no token provided')
//     }
// })


// -----------------------------------------------------------------------------

// //cluster module
// const cluster = require('cluster')
// const http = require('http')
// const os = require('os')

// if(cluster.isMaster){
//     os.cpus().forEach(()=>cluster.fork)
// }else{
//     http.createServer((req,res)=>{
//         res.end('handled by workers')
//     }).listen(8000)
// }
// //worker thread
// const {Worker,isMainThread,parentPort} = require('worker_threads')

// if(isMainThread){
//     const worker = new Worker(__filename)
//     worker.on('message',(message)=>console.log(message))
//     worker.postMessage('Do a heavy task')
// }else{
//     parentPort.on('message',()=>{
//         parentPort.postMessage('Task done..!')
//     })
// }


//block all post requests

// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     if(req.method==='POST'){
//         return res.status(403).send('POST requests are not allowed')
//     }
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send('get requests are allowed')
// })
// app.listen(8000,()=>console.log('server running on port 8000'))
// --------------------------------------------------------------------------

//validate csrf token
// const express = require('express')
// const app = express()

// app.post('/updateProfile',(req,res)=>{
//     const token = req.body.csrfToken
//     if(token!==req.session.csrfToken){
//         res.status(403).send('CSRF token validation failed')
//     }
//     res.send('user profile updated successfully')
// })
// -------------------------------------------------------------------------

//setHeader , writeHeader
// const http = require('http')

// http.createServer('/',(req,res)=>{
//     res.setHeader('Content-Type','application/json')
//     res.writeHead(200,{
//         'cache-control':'no-cache'
//     })
//     res.end('<h1>Hello world!</h1>')
// }).listen(3000)
// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.set('Content-Type','text/html')
//     res.send('header send successfully!!!!')
// })
// app.get('/',(req,res)=>{
//     res.set({
//         'Content-Type':'text/html',
//         'Cache-control':'no-cache'
//     })
//     res.json({message:'hello world!'})
// })

// --------------------------------------------------------------------------------------------------------------
//cluster module

// const cluster = require('cluster')
// const http = require('http')
// const os = require('os')

// if(cluster.isMaster){
//     console.log(`master process started with : ${process.pid}`)
//     os.cpus().forEach(()=>cluster.fork())
// }else{
//     console.log(`worker process started with : ${process.pid}`)
//     http.createServer((req,res)=>{
//         res.end('handled by workers')
//     }).listen(8000)
// }

// --------------------------------------------------------------------------------------------------------------
//worker thread

// const {Worker,isMainThread,parentPort} = require('worker_threads')

// if(isMainThread){
//     const worker = new Worker(__filename)
//     worker.on('message',(message)=>console.log(message))
//     worker.postMessage('Do a heavy task')
// }else{
//     parentPort.on('message',()=>{
//         parentPort.postMessage('Task is done')
//     })
// }



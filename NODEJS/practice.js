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
const EventEmitter = require('events')
const emitter = new EventEmitter()         

emitter.on('dataReceived',(data)=>{
    console.log(`data received ${data}`)  //on is used to add a callback function that's going to be executed when the event is triggered
})
emitter.emit('dataReceived','Hello world!')   //emit is used to trigger an event
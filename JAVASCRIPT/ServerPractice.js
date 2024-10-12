
//HTTP server

const { createServer } = require("http");
const port = 5000
const server = createServer((req,res)=>{
    res.end('hello from Nodejs!')
})

server.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})


//express server

const express = require('express')
const app = express()

const port1 = 8000

app.get('/',(req,res)=>{
    res.status(200).send('hello from Rose john')
})

app.listen(port1,()=>{
    console.log(`Server listening at http://localhost:${port1}`)
})


//blocking post request

const express = require('express') 
const route = express()

const blockPostMiddleware = (req,res,next)=>{
    if(req.method==='POST'){
        return res.status(403).json({message:'Post requests are blocked'})
    }
    next()
}

route.use(blockPostMiddleware)

route.get('/',(req,res)=>{
    res.send('GET requests are allowed')
})

route.post('/',(req,res)=>{
    res.send('POST requests are blocked')
})

route.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})



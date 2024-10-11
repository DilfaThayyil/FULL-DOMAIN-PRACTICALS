
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


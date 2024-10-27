// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.end('Hai, hello...')
// })

// server.listen(3000)


const http = require('http')
const server = http.createServer((req,res)=>{
    res.end('Hello world')
})
server.listen(3000,()=>{
    console.log('server running on port 3000')
})


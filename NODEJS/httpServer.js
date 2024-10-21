const http = require('http')

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.end('Hai, hello...')
})

server.listen(3000)
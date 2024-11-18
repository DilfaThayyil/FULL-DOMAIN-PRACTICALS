const http = require('http')
const cluster = require('cluster')
const os = require('os')

if(cluster.isMaster){
    os.cpus().forEach(()=>cluster.fork())
}else{
    http.createServer((req,res)=>{
        res.end('Handled by worker')
    }).listen(8000)
}
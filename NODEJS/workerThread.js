const {Worker,isMainThread,parentPort} = require('worker_threads')

if(isMainThread){
    const worker = new Worker(__filename)
    worker.on('message',message=>console.log(message))
    worker.postMessage('Do a heavy task')
}else{
    parentPort.on('message',()=>{
        parentPort.postMessage('Task done!')
    })
}
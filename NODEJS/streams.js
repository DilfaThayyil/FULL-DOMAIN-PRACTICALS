//readable streams

const fs = require('fs')
const readableStreams = fs.createReadStream('largeFile.txt','utf8')
readableStreams.on('data',(chunk)=>{
    console.log('Received chunk : ',chunk)
})
readableStreams.on('end',()=>{
    console.log('Finished reading file')
})


//writable streams

const writableStreams = fs.createWriteStream('output.txt')
writableStreams.write('Hello')
writableStreams.write('Hello')
writableStreams.end()
writableStreams.on('finish',()=>{
    console.log('Finished writing to file')
})
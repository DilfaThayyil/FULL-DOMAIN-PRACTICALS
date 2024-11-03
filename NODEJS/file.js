const fs = require('fs')

let fileName = 'file.txt'
let content = 'Hello from Dilfa..'

fs.writeFile(fileName,content,()=>{
    if(err){
        console.log('error creating file : ',err)
    }else{
        console.log('file created successfully')
    }
})


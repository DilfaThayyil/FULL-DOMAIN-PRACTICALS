const fs = require('fs')

const filePath = 'time.txt'

const currentTime = new Date().toLocaleString()

fs.writeFile(filePath,currentTime,(err)=>{
    if(err){
        console.log('error time setting')
    }else{
        console.log('time wrote into file successfully')
    }
})


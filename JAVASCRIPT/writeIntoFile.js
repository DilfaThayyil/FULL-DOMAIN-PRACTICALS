const fs = require('fs')

const currentTime = new Date().toLocaleString()

const filePath = 'time.txt'

fs.writeFile(filePath,currentTime,(err)=>{
    if(err){
        console.log('Error writing to file')
    }else{
        console.log('Time written to file successfully!')
    }
})
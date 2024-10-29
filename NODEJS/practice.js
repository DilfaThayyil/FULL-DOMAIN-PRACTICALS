// const express = require('express')
// const app = express()
// const fs = require('fs')
// const PORT = 3000

// const getCurrentDate = ()=>{
//     return new Promise((resolve)=>{
//         const currentDate = new Date()
//         resolve(currentDate)
//     })
// }
// const writeIntoFile = ((date)=>{
//     fs.writeFile('currentTime.txt',date.toLocaleDateString(),(err)=>{
//         if(err){
//             console.log('error wrting date into file')
//         }else{
//             console.log('time written into file successfully')
//         }
//     })
// })
// app.get('/',(req,res)=>{
//     getCurrentDate().then((date)=>{
//         writeIntoFile(date)
//         res.send('date written into file successfully')
//     }).catch((err)=>{
//         res.status(500).send('error writing into file')
//         console.log('promise rejection',err)
//     })
// })

// app.listen(PORT,()=>{
//     console.log(`server is listening on http://localhost:${PORT}`)
// })






const express = require('express')
const app = express()






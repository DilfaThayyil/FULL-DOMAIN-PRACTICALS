

// // //callback hell
// // --------------------------------------------------------------------------------------
// function fetchData(callback){
//     setTimeout(()=>{
//         callback(null,`data fetched`)
//     },1000)
// }
// function processData(data,callback){
//     setTimeout(()=>{
//         callback(null,`data processed , ${data}`)
//     },1000)
// }
// function saveData(data,callback){
//     setTimeout(()=>{
//         callback(null,`data saved , ${data}`)
//     },1000)
// }

// fetchData((err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     processData(data,(err,processData)=>{
//         if(err){
//             console.error(err)
//             return
//         }
//         saveData(processData,(err,savedData)=>{
//             if(err){
//                 console.error(err)
//                 return
//             }
//             console.log(savedData)
//         })
//     })
// })

// // -----------------------------------------------------------------------------------------------------
// // convert callback hell into promise based code

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('data fetched')
//         },1000)
//     })
// }
// function processData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`data processed , ${data}`)
//         },1000)
//     })
// }
// function saveData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`data saved , ${data}`)
//         },1000)
//     })
// }
// fetchData()
// .then((data)=>processData(data))
// .then((processedData)=>saveData(processedData))
// .then((savedData)=>console.log(savedData))
// .catch((err)=>console.error(err))



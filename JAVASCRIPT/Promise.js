let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Done in 1 seconds...'),1000)
    setTimeout(()=>reject('Undone in 3 seconds..',3000))
})
promise.then((result)=>console.log(result))
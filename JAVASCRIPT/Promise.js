// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Done in 1 seconds...'),1000)
//     setTimeout(()=>reject('Undone in 3 seconds..',3000))
// })
// promise.then((result)=>console.log(result))


// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Done in 1 seconds...'),1000)
//     setTimeout(()=>reject('Done in 3 seconds...'),3000)
// })
// promise.then((result)=>console.log(result))


const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.reject('error')
Promise.all([p1,p2,p3])
    .then(value => console.log(value))
    .catch(error => console.log('caught an error',error))



// const p1 = new Promise(resolve => setTimeout(()=>resolve('First'),1000))
// const p2 = new Promise(resolve => setTimeout(()=>resolve('second'),2000))
// Promise.race([p1,p2]).then(value => console.log(value))


// const p1 = Promise.resolve(1)
// const p2 = Promise.reject('Failed')
// Promise.allSettled([p1,p2]).then(results => console.log(results))


// const p1 = Promise.reject('Error')
// const p2 = Promise.resolve('Success')
// Promise.any([p1,p2]).then(value => console.log(value))


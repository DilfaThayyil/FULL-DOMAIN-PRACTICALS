
// //print reversed EvenNumbers with 1 sec delay
// function* reverseEven(n){
//     for(let i=n;i>=0;i-=2){
//         yield i
//     }
// }
// async function print(n){
//     const generator = reverseEven(n)
//     for(let num of generator){
//         console.log(num)
//         await new Promise(resolve => setTimeout(resolve,1000))
//     }
// }
// print(10)



//yield numbers from a 2D array
function* yieldNumbers(arr){
    for(let row of arr){
        for(let num of row){
            yield num
        }
    }
}

const arr = [[0,1],[2,3,4],[5]]
const generator = yieldNumbers(arr)
for(let num of generator){
    console.log(num)
}
const arr = [0,2,0,4,3,7,0,1]
let arr1 = arr.map((num)=>num===0?5:num)
console.log(arr1)

/////////////deepcopy of array

//structured clone
const arr2 = [1, [2, 3], { a: 4 }]
let deepCopy = structuredClone(arr2)
console.log(deepCopy)

//JSON.parse(JSON.stringify())
let deepCopy1 = JSON.parse(JSON.stringify(arr2))
console.log(deepCopy1)

//using recursion
function deepClone(arr2){
         
}

// --------------------------------------------
// //find second largest using reduce
// let arr = [98,45,12,09,45]
//     let result = arr.reduce((acc,curr)=>{
//         if(curr>acc.largest){
//             acc.secLargest = acc.largest
//             acc.largest = curr
//         }else if(curr<acc.largest && curr>acc.secLargest){
//             acc.secLargest = curr
//         }
//         return acc
//     },{largest:-Infinity,secLargest:-Infinity})

// console.log(result)
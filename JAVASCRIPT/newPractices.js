//find nth largest element from an array
let arr = [5,2,7,3,9,1,4,2,8]

function findNthLargest(arr,n){
    if(n>arr.length)return null
    return arr.sort((a,b)=>b-a)[n-1]
}

console.log(findNthLargest(arr,3))
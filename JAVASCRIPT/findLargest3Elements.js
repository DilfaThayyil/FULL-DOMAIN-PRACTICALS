
//find 3 largests
function findLargests (arr){
    let uniqueArr = [...new Set(arr)]
    uniqueArr.sort((a,b)=>b-a)
    return uniqueArr.slice(0,3)
}
const arr = [7,3,4,11,4,5,6,7,8,11]
console.log(findLargests(arr))



//move all zeros to right side in array
function moveZeros(arr){
    let j = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[j] = arr[i]
            j++
        }
    }
    for(let i=j;i<arr.length;i++){
        arr[i] = 0
    }
    return arr
}
const arr1 = [0,2,0,1,0]
console.log(moveZeros(arr1))
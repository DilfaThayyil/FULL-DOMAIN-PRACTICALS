
//find SecondLargest EvenNumber
function findSecLargest(arr){
    let result = arr.reduce((acc,curr)=>{
        if(curr%2===0){
            if(curr > acc.largest){
                acc.secLargest = acc.largest
                acc.largest = curr
            }
        }
        return acc
    },{largest:-Infinity,secLargest:-Infinity})
    return result.secLargest===-Infinity?null:result.secLargest
}
console.log(findSecLargest([4,7,5,3,5,8]))



// findSum
function sum(arr){
    let sum = arr.reduce((acc,curr)=>{
        return acc+curr
    },0)
    return sum
}
console.log(sum([1,2,3,4,5]))


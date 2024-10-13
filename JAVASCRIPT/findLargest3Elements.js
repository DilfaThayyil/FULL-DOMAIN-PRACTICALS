
//find 3 largests
function findLargests (arr){
    let uniqueArr = [...new Set(arr)]
    uniqueArr.sort((a,b)=>b-a)
    return uniqueArr.slice(0,3)
}

const arr = [7,3,4,11,4,5,6,7,8,11]
console.log(findLargests(arr))
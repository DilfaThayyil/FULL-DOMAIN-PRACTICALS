

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([6,3,6,7,4,3],6))
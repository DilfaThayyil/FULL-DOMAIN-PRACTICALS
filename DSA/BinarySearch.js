

function binarySearch(arr,target){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        const mid = Math.floor((right+left)/2)
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]<target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return -1
}

console.log(binarySearch([2,3,4,5,6,7,8],4))
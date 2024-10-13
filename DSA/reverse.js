
function reverseArray(arr){
    let left = 0
    let right = arr.length-1
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
}

console.log(reverseArray([5,3,4,7,8,9]))


function findSecondLargestEvenNumber(arr){
    let largest = -Infinity
    let secondLargest = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            if(arr[i]>largest){
                secondLargest = largest
                largest = arr[i]
            }else if(arr[i]>secondLargest && arr[i]!==largest){
                secondLargest = arr[i]
                
            } 
        }
    }   
    return secondLargest === -Infinity ? null : secondLargest
}

console.log(findSecondLargestEvenNumber([8,8,2,5,7,90,53,3,5,68]))
function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
    }while(swapped)
}

const arr = [8,2,3,0,4,6]
bubbleSort(arr)
console.log(arr)


function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numToInsert = arr[i]
        let j = i-1
        while(j>=0&&arr[j]>numToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numToInsert
    }
}

const arr1 = [7,2,4,5,9,0]
insertionSort(arr1)
console.log(arr1)

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr2 = [6,3,5,8,4,2]
console.log(quickSort(arr2))


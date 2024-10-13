

//sorted array
function findDuplicates(arr){
    let duplicates = []
    for(let i=1;i<arr.length;i++){
        if(arr[i]===arr[i-1] && !duplicates.includes(arr[i])){
            duplicates.push(arr[i])
        }
    }
    return duplicates
}

console.log(findDuplicates([1,2,32,32,32,34,34,54,56,56,56,76]))


//unsorted array
function findDups(arr){
    let seen = new Set()
    let duplicates = new Set()
    for(let num of arr){
        if(seen.has(num)){
            duplicates.add(num)
        }else{
            seen.add(num)
        }
    }
    return Array.from(duplicates)
}


console.log(findDups([8,3,4,7,6,5,1,2,4,5]))

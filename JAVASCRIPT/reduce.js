function findSecLargest(arr){
    let result = arr.reduce((acc,curr)=>{
        if(curr%2===0){
            if(curr > acc.largest){
                acc.secLargest = acc.largest
                acc.largest = curr
            }
        }
    })
}
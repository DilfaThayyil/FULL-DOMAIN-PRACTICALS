

//flatten 2D array
function flatten(arr){
    let result = []
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            result.push(arr[i][j])
        }
    }
    return result
}
const arr = [[1,2],[3,4],[5,6]];
console.log(flatten(arr));

//yield numbers from a 2D array using Generator fn
function* yieldNumbers(arr){
    for(let row of arr){
        for(let num of row){
            yield num
        }
    }
}
const arr1 = [[1,2],[3,4],[5,6]]
const generator = yieldNumbers(arr1)   
for(let num of generator){
    console.log(num)
}



//using flat method
let arr2 = [[1,2],[3,4],[5,6]]
flattedArray = arr2.flat()
console.log(flattedArray)
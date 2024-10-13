

//iterative
function fibonacciIterative(n){
    if(n<0) return null
    if(n===0) return n
    let result = [0,1]
    for(let i=2;i<=n;i++){
        result[i] = result[i-1]+result[i-2]
    }
    return result
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))


//recursive
function fibonacci(n){
    if(n<0) return null
    if(n===0 || n===1) return n
    return fibonacci(n-1)+fibonacci(n-2)
}

console.log(fibonacci(0))

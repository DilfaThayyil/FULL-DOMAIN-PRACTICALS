
//recursive
function factorial(n){
    if(n<0) return null
    if(n<=1) return 1
    return n*factorial(n-1)
}

console.log(factorial(4))


//iterative
function factorialIterative(n){
    if(n<0) return null
    if(n===0) return 1
    let result = 1
    for(let i=2;i<=n;i++) result *= i
    return result
}

console.log(factorialIterative(5))
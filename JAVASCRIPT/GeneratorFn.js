

function* reverseEven(n){
    for(let i=n;i>=0;i-=2){
        yield i
    }
}

async function print(n){
    const generator = reverseEven(n)
    for(let num of generator){
        console.log(num)
        await new Promise(resolve => setTimeout(resolve,1000))
    }
}

print(10)
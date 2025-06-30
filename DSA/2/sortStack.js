//sort stack using temporary stack

function sortStack(originalStack){
    let tempStack = []
    while(originalStack.length>0){
        let temp = originalStack.pop()
        while(tempStack.length>0 && tempStack[tempStack.length-1]<temp){
            originalStack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    while(tempStack.length>0){
        originalStack.push(tempStack.pop())
    }
    return originalStack
}

let stack = [5,2,4,9,6,0]
console.log(sortStack(stack))


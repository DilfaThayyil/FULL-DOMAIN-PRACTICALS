class Stack{
    constructor(size){
        this.item = []
        this.size = size
    }
    push(element){
        return this.item.push(element)
    }
    pop(){
        if(this.item.length===0){
            return null
        }
        return this.item.pop()
    }
    display(){
        console.log(this.item.toString())
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.display()
console.log('after deleting the last element:')
stack.pop()
stack.display()
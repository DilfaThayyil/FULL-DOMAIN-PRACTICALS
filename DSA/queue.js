class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        return this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    display(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.display()
console.log('after deleting the first element :')
queue.dequeue()
queue.display()
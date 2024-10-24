// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node = new Node(value)
//         if(index===0){
//             if(!this.head){
//                 this.head = node
//             }else{
//                 node.next =this.head
//                 this.head = node
//             }
//             this.size++
//             return
//         }
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//         node.next = prev.next
//         prev.next = node
//         this.size++
//     }
//     deleteByIndex(index){
//         if(index===0){
//             if(this.head){
//                 this.head = this.head.next
//                 this.size--
//                 return
//             }
//         }
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             if(!prev.next){
//                 return
//             }
//             prev = prev.next
//         }
//         if(prev.next){
//             prev.next = prev.next.next
//         }
//         this.size--
//     }
//     deleteByValue(value){
//         if(this.head.value===value){
//             this.head = this.head.next
//             this.size--
//         }
//         let prev = this.head
//         while(prev.next&&prev.next.value!==value){
//             prev = prev.next
//         }
//         if(prev.next){
//             prev.next = prev.next.next
//         }
//         this.size--
//     }
//     reverse(){
//         let curr = this.head
//         let prev = null
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }
//     findMiddle(){
//         if(!this.head){
//             return null
//         }
//         let slow = this.head
//         let fast = this.head
//         while(fast&&fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow
//     }
//     search(value){
//         if(!this.head){
//             return -1
//         }
//         let curr = this.head
//         let i = 0
//         while(curr){
//             if(curr.value===value){
//                 return
//             }else{
//                 curr = curr.next
//                 i++
//             }
//         }
//         return -1
//     }
//     removeDuplicates(){
//         if(!this.head){
//             return null
//         }
//         let curr = this.head
//         let seen = new Set()
//         seen.add(curr.value)
//         while(curr.next){
//             if(seen.has(curr.next.value)){
//                 curr.next = curr.next.next
//                 this.size--
//             }else{
//                 seen.add(curr.next.value)
//                 curr = curr.next
//             }
//         }
//     }
// }


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }
// class DoubleLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node = new Node(value)
//         if(index===0){
//             if(!this.head){
//                 this.head = node
//                 this.tail = node
//             }else{
//                 node.next = this.head
//                 this.head.prev = node
//                 this.head = node
//             }
//             this.size++
//             return
//         }
//         let curr = this.head
//         let currentIndex = 0
//         while(curr&&currentIndex<index){
//             curr = curr.next 
//             currentIndex++
//         }
//         if(currentIndex===index){
//             if(curr){
//                 node.next = curr
//                 node.prev = curr.prev
//                 if(curr.prev){
//                     curr.prev.next = node
//                 }
//                 curr.prev = node
//             }else{
//                 this.tail.next = node
//                 node.prev = this.tail
//                 this.tail = node
//             }
//             this.size++
//         }else{
//             console.log('index out of bounds')
//         }
//     }
//     deleteByIndex(index){
//         if(!this.head){
//             return null
//         }
//         if(index===0){
//             if(this.head===this.tail){
//                 this.head = null
//                 this.tail = null
//             }else{
//                 this.head = this.head.next
//                 this.head.prev = null
//             }
//             this.size--
//             return
//         }
//         let curr = this.head
//         let currentIndex = 0
//         while(curr&&currentIndex<index){
//             curr = curr.next
//             currentIndex++
//         }
//         if(!curr){
//             console.log('value not found')
//         }
//         if(curr===this.tail){
//             this.tail = curr.prev
//             this.tail.next = null
//         }else{
//             curr.prev.next = curr.next
//             if(curr.next){
//                 curr.next.prev = curr.prev
//             }
//         }
//         return
//     }
//     deleteByValue(value){
//         if(!this.head){
//             return null
//         }
//         if(this.head.value===value){
//             if(this.head===this.tail){
//                 this.head = null
//                 this.tail = null
//             }else{
//                 this.head = this.head.next
//                 this.head.prev = null
//             }
//             this.size--
//             return
//         }
//         let curr = this.head
//         while(curr&&curr.value!==value){
//             curr = curr.next
//         }
//         if(!curr){
//             console.log('value not found')
//         }
//         if(curr===this.tail){
//             this.tail = curr.prev
//             this.tail.next = null
//         }else{
//             curr.prev.next = curr.next
//             if(curr.next){
//                 curr.next.prev = curr.prev
//             }
//         }
//         return
//     }
// }


// class Stack{
//     constructor(size){
//         this.table = []
//         this.size = size
//     }
//     push(element){
//         return this.table.push(element)
//     }
//     pop(){
//         if(this.table.length===0){
//             return null
//         }
//         return this.table.pop()
//     }
//     display(){
//         console.log(this.table.toString())
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.display()
// console.log('after deleting last element')
// stack.pop()
// stack.display()



// class Queue{
//     constructor(size){
//         this.item = []
//         this.size = size
//     }
//     enqueue(element){
//         return this.item.push(element)
//     }
//     dequeue(element){
//         if(this.item.length===0){
//             return null
//         }
//         return this.item.shift()
//     }
//     display(){
//         console.log(this.item.toString())
//     }
// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.display()
// console.log('after deleting the first element')
// queue.dequeue()
// queue.display()


class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index= this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0]===key)
            if(sameKeyItem){
                return bucket.splice(bucket.indexOf(sameKeyItem))
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table = new Hashtable()
table.set("name","DIlfa")
table.set("age",20)
table.display()
console.log(table.get("name"))
console.log('after removing: ')
table.remove()
table.display()
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
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
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
//             console.log("index out of bounds") 
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
//             console.log("value not found")
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
//     reverse(){
//         let curr = this.head
//         let temp = null
//         while(curr){
//             temp = curr.prev
//             curr.prev = curr.next
//             curr.next = temp
//             curr = curr.prev
//         }
//         if(temp){
//             this.head = temp.prev
//         }
//     }
//     findMiddle(){
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
//         let i=0
//         let curr = this.head
//         while(curr){
//             if(curr.value===value){
//                 return i
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
//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }

// const dll = new DoubleLinkedList()
// dll.prepend(10)
// dll.prepend(20)
// dll.append(30)
// dll.append(40)
// dll.insert(50,2)
// dll.insert(60,3)
// dll.print()
// dll.deleteByIndex(2)
// console.log('after deletign by index')
// dll.print()
// dll.deleteByValue(60)
// console.log('after deleting by value')
// dll.print()
// dll.reverse()
// console.log('after reversing')
// dll.print()
// const middle = dll.findMiddle()
// console.log(`middle element is: ${middle.value}`)
// const index = dll.search(40)
// if(index!==-1){
//     console.log(`value is found at index ${index}`)
// }else{
//     console.log('value is not found');
    
// }

class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class LL{
    constructor(){
        this.head = null
        this.tail = null
    }
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
    }
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }
    insert(value,index){
        const node = new Node(value)
        if(index===0){
            if(!this.head){
                this.head = node
                this.tail = node
            }else{
                node.next = this.head
                this.head.prev = node
                this.head = node
            }
            return
        }
        let curr = this.head
        let currentIndex = 0
        while(curr&&currentIndex<index){
            curr = curr.next
            currentIndex++ 
        }
        if(currentIndex===index){
            node.next = curr.next
            node.prev = curr.prev
            
        }
    }
}
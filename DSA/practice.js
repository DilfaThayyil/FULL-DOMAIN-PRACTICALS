// // function binarySearch(arr,target){
// //     let left = 0
// //     let right = arr.length-1
// //     while(left<=right){
// //         const mid = Math.floor((right+left)/2)
// //         if(arr[mid]===target){
// //             return mid
// //         }else if(target>arr[mid]){
// //             left = mid+1
// //         }else{
// //             right = mid-1
// //         }
// //     }
// //     return -1
// // }
// // console.log(binarySearch([2,3,4,5,6,7,8],4))



// // function binarySearchRecursion(arr,target,left=0,right=arr.length-1){
// //     if(left>right){
// //         return -1
// //     }
// //     let mid = Math.floor((left+right)/2)
// //     if(target===arr[mid]){
// //         return mid
// //     }else if(target<arr[mid]){
// //         return binarySearch(arr,target,left,mid-1)
// //     }else{
// //         return binarySearch(arr,target,mid+1,right)
// //     }
// // }

// // console.log(binarySearchRecursion([2,3,4,5,6,7,8],4))


// // class Node{
// //     constructor(value){
// //         this.value = value
// //         this.next = null
// //     }
// // }
// // class LinkedList{
// //     constructor(){
// //         this.head = null
// //         this.size = 0
// //     }
// //     prepend(value){
// //         const node = new Node(value)
// //         if(!this.head){
// //             this.head = node
// //         }else{
// //             node.next = this.head
// //             this.head = node
// //         }
// //         this.size++
// //     }
// //     append(value){
// //         const node = new Node(value)
// //         if(!this.head){
// //             this.head = node
// //         }else{
// //             let prev = this.head
// //             while(prev.next){
// //                 prev = prev.next
// //             }
// //             prev.next = node
// //         }
// //         this.size++
// //     }
// //     insert(value,index){
// //         const node = new Node(value)
// //         if(index===0){
// //             if(!this.head){
// //                 this.head = node
// //             }else{
// //                 node.next =this.head
// //                 this.head = node
// //             }
// //             this.size++
// //             return
// //         }
// //         let prev = this.head
// //         for(let i=0;i<index-1;i++){
// //             prev = prev.next
// //         }
// //         node.next = prev.next
// //         prev.next = node
// //         this.size++
// //     }
// //     deleteByIndex(index){
// //         if(index===0){
// //             if(this.head){
// //                 this.head = this.head.next
// //                 this.size--
// //                 return
// //             }
// //         }
// //         let prev = this.head
// //         for(let i=0;i<index-1;i++){
// //             if(!prev.next){
// //                 return
// //             }
// //             prev = prev.next
// //         }
// //         if(prev.next){
// //             prev.next = prev.next.next
// //         }
// //         this.size--
// //     }
// //     deleteByValue(value){
// //         if(this.head.value===value){
// //             this.head = this.head.next
// //             this.size--
// //         }
// //         let prev = this.head
// //         while(prev.next&&prev.next.value!==value){
// //             prev = prev.next
// //         }
// //         if(prev.next){
// //             prev.next = prev.next.next
// //         }
// //         this.size--
// //     }
// //     reverse(){
// //         let curr = this.head
// //         let prev = null
// //         while(curr){
// //             let next = curr.next
// //             curr.next = prev
// //             prev = curr
// //             curr = next
// //         }
// //         this.head = prev
// //     }
// //     findMiddle(){
// //         if(!this.head){
// //             return null
// //         }
// //         let slow = this.head
// //         let fast = this.head
// //         while(fast&&fast.next){
// //             slow = slow.next
// //             fast = fast.next.next
// //         }
// //         return slow
// //     }
// //     search(value){
// //         if(!this.head){
// //             return -1
// //         }
// //         let curr = this.head
// //         let i = 0
// //         while(curr){
// //             if(curr.value===value){
// //                 return
// //             }else{
// //                 curr = curr.next
// //                 i++
// //             }
// //         }
// //         return -1
// //     }
// //     removeDuplicates(){
// //         if(!this.head){
// //             return null
// //         }
// //         let curr = this.head
// //         let seen = new Set()
// //         seen.add(curr.value)
// //         while(curr.next){
// //             if(seen.has(curr.next.value)){
// //                 curr.next = curr.next.next
// //                 this.size--
// //             }else{
// //                 seen.add(curr.next.value)
// //                 curr = curr.next
// //             }
// //         }
// //     }
// // }


// // class Node{
// //     constructor(value){
// //         this.value = value
// //         this.next = null
// //         this.prev = null
// //     }
// // }
// // class DoubleLinkedList{
// //     constructor(){
// //         this.head = null
// //         this.tail = null
// //         this.size = 0
// //     }
// //     prepend(value){
// //         const node = new Node(value)
// //         if(!this.head){
// //             this.head = node
// //             this.tail = node
// //         }else{
// //             node.next = this.head
// //             this.head.prev = node
// //             this.head = node
// //         }
// //         this.size++
// //     }
// //     append(value){
// //         const node = new Node(value)
// //         if(!this.head){
// //             this.head = node
// //             this.tail = node
// //         }else{
// //             let prev = this.head
// //             while(prev.next){
// //                 prev = prev.next
// //             }
// //             prev.next = node
// //         }
// //         this.size++
// //     }
// //     insert(value,index){
// //         const node = new Node(value)
// //         if(index===0){
// //             if(!this.head){
// //                 this.head = node
// //                 this.tail = node
// //             }else{
// //                 node.next = this.head
// //                 this.head.prev = node
// //                 this.head = node
// //             }
// //             this.size++
// //             return
// //         }
// //         let curr = this.head
// //         let currentIndex = 0
// //         while(curr&&currentIndex<index){
// //             curr = curr.next 
// //             currentIndex++
// //         }
// //         if(currentIndex===index){
// //             if(curr){
// //                 node.next = curr
// //                 node.prev = curr.prev
// //                 if(curr.prev){
// //                     curr.prev.next = node
// //                 }
// //                 curr.prev = node
// //             }else{
// //                 this.tail.next = node
// //                 node.prev = this.tail
// //                 this.tail = node
// //             }
// //             this.size++
// //         }else{
// //             console.log('index out of bounds')
// //         }
// //     }
// //     deleteByIndex(index){
// //         if(!this.head){
// //             return null
// //         }
// //         if(index===0){
// //             if(this.head===this.tail){
// //                 this.head = null
// //                 this.tail = null
// //             }else{
// //                 this.head = this.head.next
// //                 this.head.prev = null
// //             }
// //             this.size--
// //             return
// //         }
// //         let curr = this.head
// //         let currentIndex = 0
// //         while(curr&&currentIndex<index){
// //             curr = curr.next
// //             currentIndex++
// //         }
// //         if(!curr){
// //             console.log('value not found')
// //         }
// //         if(curr===this.tail){
// //             this.tail = curr.prev
// //             this.tail.next = null
// //         }else{
// //             curr.prev.next = curr.next
// //             if(curr.next){
// //                 curr.next.prev = curr.prev
// //             }
// //         }
// //         return
// //     }
// //     deleteByValue(value){
// //         if(!this.head){
// //             return null
// //         }
// //         if(this.head.value===value){
// //             if(this.head===this.tail){
// //                 this.head = null
// //                 this.tail = null
// //             }else{
// //                 this.head = this.head.next
// //                 this.head.prev = null
// //             }
// //             this.size--
// //             return
// //         }
// //         let curr = this.head
// //         while(curr&&curr.value!==value){
// //             curr = curr.next
// //         }
// //         if(!curr){
// //             console.log('value not found')
// //         }
// //         if(curr===this.tail){
// //             this.tail = curr.prev
// //             this.tail.next = null
// //         }else{
// //             curr.prev.next = curr.next
// //             if(curr.next){
// //                 curr.next.prev = curr.prev
// //             }
// //         }
// //         return
// //     }
// // }


// // class Stack{
// //     constructor(size){
// //         this.table = []
// //         this.size = size
// //     }
// //     push(element){
// //         return this.table.push(element)
// //     }
// //     pop(){
// //         if(this.table.length===0){
// //             return null
// //         }
// //         return this.table.pop()
// //     }
// //     display(){
// //         console.log(this.table.toString())
// //     }
// // }

// // const stack = new Stack()
// // stack.push(10)
// // stack.push(20)
// // stack.push(30)
// // stack.push(40)
// // stack.display()
// // console.log('after deleting last element')
// // stack.pop()
// // stack.display()



// // class Queue{
// //     constructor(size){
// //         this.item = []
// //         this.size = size
// //     }
// //     enqueue(element){
// //         return this.item.push(element)
// //     }
// //     dequeue(element){
// //         if(this.item.length===0){
// //             return null
// //         }
// //         return this.item.shift()
// //     }
// //     display(){
// //         console.log(this.item.toString())
// //     }
// // }

// // const queue = new Queue()
// // queue.enqueue(10)
// // queue.enqueue(20)
// // queue.enqueue(30)
// // queue.enqueue(40)
// // queue.display()
// // console.log('after deleting the first element')
// // queue.dequeue()
// // queue.display()


// // class Hashtable{
// //     constructor(size){
// //         this.table = new Array(size)
// //         this.size = size
// //     }
// //     hash(key){
// //         let total = 0
// //         for(let i=0;i<key.length;i++){
// //             total += key.charCodeAt(i)
// //         }
// //         return total%this.size
// //     }
// //     set(key,value){
// //         const index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(!bucket){
// //             this.table[index] = [[key,value]]
// //         }else{
// //             const sameKeyItem = bucket.find(item => item[0]===key)
// //             if(sameKeyItem){
// //                 sameKeyItem[1] = value
// //             }else{
// //                 bucket.push([key,value])
// //             }
// //         }
// //     }
// //     get(key){
// //         const index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(bucket){
// //             const sameKeyItem = bucket.find(item => item[0]===key)
// //             if(sameKeyItem){
// //                 return sameKeyItem[1]
// //             }
// //         }
// //         return undefined
// //     }
// //     remove(key){
// //         const index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(bucket){
// //             const sameKeyItem = bucket.find(item => item[0]===key)
// //             if(sameKeyItem){
// //                 return bucket.splice(bucket.indexOf(sameKeyItem))
// //             }
// //         }
// //     }
// //     display(){
// //         for(let i=0;i<this.table.length;i++){
// //             if(this.table[i]){
// //                 console.log(i,this.table[i])
// //             }
// //         }
// //     }
// // }

// // const table = new Hashtable(50)
// // table.set("name","Dilfa")
// // table.set("age",20)

// // table.display()
// // console.log(table.get("age"))

// // table.remove("age")
// // console.log('after removal')
// // table.display()


// // class TrieNode{
// //     constructor(){
// //         this.children = {}
// //         this.isEndOfWord = false
// //     }
// // }
// // class Trie{
// //     constructor(){
// //         this.root = new TrieNode()
// //     }
// //     insert(word){
// //         let node = this.root
// //         for(let char of word){
// //             if(!node.children[char]){
// //                 node.children[char] = new TrieNode()
// //             }
// //             node = node.children[char]
// //         }
// //         node.isEndOfWord = true
// //     }
// //     search(word){
// //         let node = this.root
// //         for(let char of word){
// //             if(!node.children[char]){
// //                 return false
// //             }
// //             node = node.children[char]
// //         }
// //         return node.isEndOfWord
// //     }
// //     startWith(prefix){
// //         let node = this.root
// //         for(let char of word){
// //             if(!node.children[char]){
// //                 return false
// //             }
// //             node = node.children[char]
// //         }
// //         return true
// //     }
// // }

// // const trie = new TrieNode()
// // trie.insert("apple")
// // trie.insert("orange")
// // console.log(trie.search("apple"))
// // console.log(trie.startWith("or"))



// // class maxHeap{
// //     constructor(){
// //         this.heap = []
// //     }
// //     build(arr){
// //         this.heap = arr.slice()
// //         for(let i=Math.floor(arr.length/2);i>=0;i--){
// //             this.heapifyDown(i)
// //         }
// //     }
// //     insert(value){
// //         this.heap.push(value)
// //         this.heapifyUp(this.heap.length-1)
// //     }
// //     heapifyUp(index){
// //         let parentIndex = Math.floor((index-1)/2)
// //         while(index>0&&this.heap[parentIndex]<this.heap[index]){
// //             [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
// //             index = parentIndex
// //             parentIndex = Math.floor((index-1)/2)
// //         }
// //     }
// //     heapifyDown(index){
// //         let leftChildIndex = Math.floor((2*index)+1)
// //         let rightChildIndex = Math.floor((2*index)+2)
// //         largest = index
// //         if(leftChildIndex<this.heap.length&&this.heap[leftChildIndex]>this.heap[largest]){
// //             largest = leftChildIndex
// //         }
// //         if(rightChildIndex<this.heap.length&&this.heap[rightChildIndex]>this.heap[largest]){
// //             largest = rightChildIndex
// //         }
// //         if(largest!==index){
// //             [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
// //             this.heapifyDown(largest)
// //         }
// //     }
// //     remove(){
// //         if(this.heap.length===0){
// //             return null
// //         }
// //         const root = this.heap[0]
// //         if(this.heap.length===1){
// //             return this.heap.pop()
// //         }
// //         this.heap[0] = this.heap.pop()
// //         this.heapifyDown(0)
// //         return root
// //     }
// //     heapSort(arr){
// //         this.build(arr)
// //         let sorted = []
// //         while(this.heap.length>0){
// //             sorted.push(this.remove())
// //         }
// //         return sorted
// //     }
// // }



// // //Merge sort

// // function mergeSort(arr){
// //     if(arr.length<2){
// //         return arr
// //     }
// //     let mid = Math.floor(arr.length/2)
// //     let left = arr.slice(0,mid)
// //     let right = arr.slice(mid)
// //     return merge(mergeSort(left),mergeSort(right))
// // }

// // function merge(left,right){
// //     let sorted = []
// //     while(left.length&&right.length){
// //         if(left[0]<=right[0]){
// //             sorted.push(left.shift())
// //         }else{
// //             sorted.push(right.shift())
// //         }
// //     }
// //     return [...sorted,...left,...right]
// // }
// // console.log(mergeSort([5,2,8,4,6,1]))



// // //hashtable

// // class Hashtable{
// //     constructor(size){
// //         this.table = new Array(size)
// //         this.size = size
// //     }
// //     hash(key){
// //         let total = 0
// //         for(let i=0;i<key.length;i++){
// //             total += key.charCodeAt(i)
// //         }
// //         return total
// //     }
// //     set(key,value){
// //         const index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(!bucket){
// //             this.table[index] = [[key,value]]
// //         }else{
// //             const sameKeyItem = bucket.find(item => item[0]===key)
// //             if(sameKeyItem){
// //                 sameKeyItem[1] = value
// //             }else{
// //                 bucket.push([key,value])
// //             }
// //         }
// //     }
// //     get(key){
// //         const index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(bucket){
// //             const sameKeyItem = bucket.find(item => item[0]===key)
// //             if(sameKeyItem){
// //                 return sameKeyItem[1]
// //             }
// //         }
// //         return undefined
// //     }
// //     remove(key){
// //         const index = this.hash(key)
// //         const bucket = this.table[index]
// //         if(bucket){
// //             const sameKeyItem = bucket.find(item => item[0]===key)
// //             if(sameKeyItem){
// //                 return bucket.splice(bucket.indexOf(sameKeyItem))
// //             }
// //         }
// //     }
// //     display(){
// //         for(let i=0;i<this.table.length;i++){
// //             if(this.table[i]){
// //                 console.log(i,this.table[i])
// //             }
// //         }
// //     }
// // }

// // const table = new Hashtable()
// // table.set("nam","Dil")
// // table.set("age","20")
// // table.display()


// // // Graph
// // class Graph{
// //     constructor(){
// //         this.adjacencyList = {}
// //     }
// //     addVertex(vertex){
// //         if(!this.adjacencyList[vertex]){
// //             this.adjacencyList[vertex] = new Set()
// //         }
// //     }
// //     addEdge(vertex1,vertex2){
// //         if(!this.adjacencyList[vertex1]){
// //             this.addVertex(vertex1)
// //         }
// //         if(!this.adjacencyList[vertex2]){
// //             this.addVertex(vertex2)
// //         }
// //         this.adjacencyList[vertex1].add(vertex2)
// //         this.adjacencyList[vertex2].add(vertex1)
// //     }
// //     hasEdge(vertex1,vertex2){
// //         return (
// //             this.adjacencyList[vertex1].has(vertex2)&&
// //             this.adjacencyList[vertex2].has(vertex1)
// //         )
// //     }
// //     removeVertex(vertex){
// //         if(!this.adjacencyList[vertex]){
// //             return
// //         }
// //         delete this.adjacencyList[vertex]
// //     }
// //     removeEdge(vertex1,vertex2){
// //         this.adjacencyList[vertex1].delete(vertex2)
// //         this.adjacencyList[vertex2].delete(vertex1)
// //     }
// //     hasCycle(){
// //         const visited = new Set()
// //         const dfsCycle = (vertex,parent)=>{
// //             visited.add(vertex)
// //             for(let neighbour of this.adjacencyList[vertex]){
// //                 if(!visited.has(neighbour)){
// //                     if(dfsCycle(neighbour,vertex)){
// //                         return true
// //                     }
// //                 }else if(neighbour!==parent){
// //                     return true
// //                 }
// //             }
// //             return false
// //         }
// //         for(let vertex in this.adjacencyList){
// //             if(!visited.has(vertex)){
// //                 if(dfsCycle(vertex,null)){
// //                     return true
// //                 }
// //             }
// //         }
// //         return false
// //     }
// //     countCycles(){
// //         let visited = new Set();
// //         let countCycles = 0;
    
// //         const dfsCycle = (vertex, parent) => {
// //             visited.add(vertex);
// //             for (let neighbor of this.adjacencyList[vertex]) {
// //                 if (!visited.has(neighbor)) {
// //                     if (dfsCycle(neighbor, vertex)) {
// //                         countCycles++;
// //                     }
// //                 } else if (neighbor !== parent) {
// //                     countCycles++;
// //                 }
// //             }
// //             return false;
// //         };
    
// //         for (let vertex in this.adjacencyList) {
// //             if (!visited.has(vertex)) {
// //                 dfsCycle(vertex, null);
// //             }
// //         }
// //         return countCycles / 2; 
// //     }    
// //     display(){
// //         for(let vertex in this.adjacencyList){
// //             console.log(vertex+"=>"+[...this.adjacencyList[vertex]])
// //         }
// //     }
// // }

// // const graph = new Graph()
// // graph.addVertex("B")
// // graph.addVertex("C")
// // graph.addVertex("D")
// // graph.addEdge("D","B")
// // graph.addEdge("B","C")
// // graph.addEdge("C","D")
// // graph.display()
// // console.log(graph.hasEdge("B","C"))
// // console.log(graph.hasCycle())
// // console.log(graph.countCycles())



// // ------------------------------------------


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(!this.root){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(!root.left){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(!root.right){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(!root){
//             return root
//         }
//         if(value<root.value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(value>root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left&&!root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
        
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }
//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left){+
//                 queue.push(curr.left)
//             }else{
//                 queue.push(curr.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }
//         return this.min(root.left)
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }
//         return this.min(root.right)
//     }
//     findClosest(root,target){
//         let closest = root.value
//         while(root){
//             if(Math.abs(target-closest)<Math.abs(target-root.value)){
//                 closest = root.value
//             }
//             if(target<root.value){
//                 root = root.left
//             }else if(target>root.value){
//                 root = root.right
//             }else{
//                 break
//             }
//         }
//         return closest
//     }
//     sum(root){
//         if(!root){
//             return 0
//         }
//         return root.value+this.sum(root.left)+this.sum(root.right)
//     }
//     isBst(root,min=null,max=null){
//         if(!root){
//             return true
//         }
//         if(min&&root.value>=min||max&&root.value<=max){
//             return false
//         }
//         return this.isBst(root.left,min,root.value)&&this.isBst(root.right,root.value,max)
//     }
// }

// // --------------------------------------------------------------------


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjacencyList[vertex1].has(vertex2)&&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }
//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex+"=>"+[...this.adjacencyList[vertex]])
//         }
//     }
//     dfs(start){
//         const stack = [start]
//         const visited = new Set()
//         while(stack.length>0){
//             const vertex = stack.pop()
//             if(!visited.has(vertex)){
//                 console.log(vertex)
//                 visited.add(vertex)
//                 stack.push(...this.adjacencyList[vertex])
//             }
//         }
//     }
//     bfs(start){
//         const queue = [start]
//         const visited = new Set()
//         while(queue.length>0){
//             const vertex = queue.shift()
//             if(!visited.has(vertex)){
//                 console.log(vertex)
//                 visited.add(vertex)
//                 queue.push(...this.adjacencyList[vertex])
//             }
//         }
//     }
//     hasCycle(){
//         const visited = new Set()
//         const dfsCycle = (vertex,parent)=>{
//             visited.add(vertex)
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     if(dfsCycle(neighbour,vertex)){
//                         return true
//                     }
//                 }else if(neighbour!==parent){
//                     return true
//                 }
//             }
//             return false
//         }
//         for(let vertex in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 if(dfsCycle(vertex,null)){
//                     return true
//                 }
//             }
//         }
//         return false
//     }
//     countCycle(){
//         const visited = new Set()
//         cycleCount = 0
//         const dfsCycle = (vertex,parent)=>{
//             visited.add(vertex)
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     if(dfsCycle(neighbour,vertex)){
//                         cycleCount++
//                     }
//                 }else if(neighbour!==parent){
//                     cycleCount++
//                 }
//             }
//         }
//         for(let vertex in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 dfsCycle(vertex,null)
//             }
//         }
//         return cycleCount/2
//     }
//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex+"=>"+[...this.adjacencyList[vertex]])
//         }
//     }
// }

// // -------------------------------------------------------------

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += charCodeAt(i)
//         }
//         return total
//     }
//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 return bucket.splice(bucket.indexOf(sameKeyItem))
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }


// // ----------------------------------------------------------------

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sorted = []
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// const arr = [1,6,2,9,4]
// console.log(mergeSort(arr))


// // --------------------------------------------------------------------


// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }
//     build(arr){
//         this.heap = arr.slice()
//         for(let i=Math.floor(arr.length/2);i>=0;i--){
//             this.heapifyDown(i)
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index){
//         let parentIndex = Math.floor((index-1)/2)
//         while(index>0&&this.heap[parentIndex]<this.heap[index]){
//             [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
//             index = parentIndex
//             parentIndex = Math.floor((index-1)/2)
//         }
//     }
//     heapifyDown(index){
//         let leftChildIndex = Math.floor((2*index)+1)
//         let rightChildIndex = Math.floor((2*index)+2)
//         largest = index
//         if(leftChildIndex<this.heap.length&&this.heap[leftChildIndex]>this.heap[largest]){
//             largest = leftChildIndex
//         }
//         if(rightChildIndex<this.heap.length&&this.heap[rightChildIndex]>this.heap[index]){
//             largest = rightChildIndex
//         }
//         if(largest!==index){
//             [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
//             this.heapifyDown(largest)
//         }
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         const root = this.heap[0]
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return root
//     }
//     heapSort(arr){
//         this.build(arr)
//         let sorted = []
//         while(this.heap.length>0){
//             sorted.push(this.remove())
//         }
//         return sorted
//     }
// }

// // -------------------------------heapsort----------------------------------------


// function heapify(arr, n, i) {
//     let largest = i
//     let left = 2*i+1
//     let right = 2*i+2
//     if(left<n&&arr[left]>arr[largest]){
//         largest = left
//     }
//     if(right<n&&arr[right]>arr[largest]){
//         largest = right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }

// function heapSort(arr){
//     let n = arr.length
//     for(let i=Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i=n-1;i>0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
// }

// let arr1 = [6,2,4,9,5,1]
// heapSort(arr1);
// console.log("Sorted array:", arr1);

// // --------------------------------------------Day 1---------------------------------------------------(11-11-2024)

class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class LinkedList{
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
    insert(value){
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
            if(curr){
                node.next = curr
                node.prev = curr.prev
                if(curr.prev){
                    curr.prev.next = node
                }
                curr.prev = node
            }else{
                this.tail.next = node
                node.prev = this.tail
                this.tail = node
            }
        }else{
            console.log('index out of bounds')
        }
    }
    reverse(){
        let curr = this.head
        let temp = null
        while(curr){
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp
            curr = curr.prev
        }
        if(temp){
            this.head = temp.prev
        }
    }
    deleteByValue(value){
        if(!this.head){
            return 
        }
        if(this.head.value===value){
            if(this.head===this.tail){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            return
        }
        let curr = this.head
        while(curr&&curr.value!==value){
            curr = curr.next
        }
        if(!curr){
            console.log('value not found')
        }
        if(curr===this.tail){
            this.tail = curr.prev
            this.tail.next = null
        }else{
            curr.prev.next = curr.next
            if(curr.next){
                curr.next.prev = curr.prev
            }
        }
        return
    }
    deleteByIndex(index){
        if(!this.head){
            return arr
        }
        if(index===0){
            if(this.head===this.tail){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            return
        }
        let curr = this.head
        let currentIndex = 0
        while(curr&&currentIndex<index){
            curr = curr.next
            currentIndex++
        }
        if(!curr){
            console.log('value not found')
        }
        if(curr===this.tail){
            this.tail = curr.prev
            this.tail.next = null
        }else{
            curr.prev.next = curr.next
            if(curr.next){
                curr.next.prev = curr.prev
            }
        }
        return
    }
    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}



function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]<arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)

    return arr
}

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numToIns = i
        let j = i-1
        while(j>=0&&arr[j]>numToIns){
            arr[j+1] = arr[j]
            j = j+1
        }
        arr[j+1] = numToIns
    }
    return arr
}

function selectionSort(arr){
    for(let i=1;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

function quickSort(arr){
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return arr
}

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor((arr.length/2))
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(left,right){
    let sorted = []
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

function heapify(arr,n,i){
    let largest = i
    let leftChild = 2*i+1
    let rightChild = 2*i+2
    if(leftChild<n&&arr[leftChild]>arr[largest]){
        largest = leftChild
    }
    if(rightChild<n&&arr[rightChild]>arr[largest]){
        largest = rightChild
    }
    if(largest!==i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

function heapSort(arr){
    let n = arr.length-1
    for(let i=Math.floor(n/2);i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
}


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
    }
    insert(value,index){
        const node = new Node(value)
        if(index===0){
            if(!this.head){
                this.head = node
            }else{
                
            }
        }
    }
}
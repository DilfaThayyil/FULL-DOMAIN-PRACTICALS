class MaxHeap{
    constructor(){
        this.heap = []
    }
    build(arr){
        this.heap = arr.slice()
        for(let i=Math.floor(arr.length/2);i>=0;i--){
            this.heapifyDown(i)
        }
    }
    insert(value){
        this.heap.push(value) 
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while(index>0&&this.heap[parentIndex]<this.heap[index]){
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }
    heapifyDown(index){
        let leftChildIndex = Math.floor((2*index)+1)
        let rightChildIndex = Math.floor((2*index)+2)
        largest = index
        if(leftChildIndex<this.heap.length&&this.heap[leftChildIndex]>this.heap[largest]){
            largest = leftChildIndex
        }
        if(rightChildIndex<this.heap.length&&this.heap[rightChildIndex]>this.heap[largest]){
            largest = rightChildIndex
        }
        if(largest!==index){
            [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
            this.heapifyDown(largest)
        }
    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        const root = this.heap[0]
        if(this.heap.length===1){
            return this.heap.pop()
        }
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root
    }
    heapSort(arr){
        this.build(arr)
         sorted = []
        while(this.heap.length>0){
            sorted.push(this.remove())
        }
        return sorted
    }
}
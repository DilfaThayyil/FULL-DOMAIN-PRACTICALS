class Node{
    constructor(value){
        this.value = null
        this.next = null
    }
}
class LinkedList{
    constructor(value){
        this.head = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    getSize(){
        return this.size
    }

    insert(value,index){
        const node = new Node(value)
        if(index===0){
            if(!this.head){
                this.head = node
            }else{
                node.next = this.head
                this.head = node
            }
            this.size++
            return
        }
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }

    delete(value){
        if(!this.head){
            return
        }
        if(this.head.value===value){
            this.head = this.head.next
        }
        let prev = this.head
        while(prev.next&&prev.next.value!==value){
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
        }
        this.size--
    }

    delete(index){
        if(index===0){
            if(this.head){
                this.head = this.head.next
            }
            this.size--
            return
        }
        let prev = this.head
        for(let i=0;i<index-1;i++){
            if(!prev.next){
                return
            }
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
        }
        this.size--
    }
}
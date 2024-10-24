class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            return this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left = node
            }else{
                return this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                return this.insertNode(root.right,node)
            }
        }
    }
    findClosest(root,target){
        let closest = root.value
        while(root){
            if(Math.abs(target-closest)>Math.abs(target-root.value)){
                closest = root.value
            }
            if(target<root.value){
                root = root.left
            }else if(target>root.value){
                root = root.right
            }else{
                break
            }
        }
        return closest
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(root.value<value){
                return this.search(root.right,value)
            }else{
                return this.search(root.left,value)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    isBst(root,min,max){
        if(!root){
            return true
        }
        if((min&&root.value>=min)||(max&&root.value<=max)){
            return false
        }
        return this.isBst(root.left,min,root.value)&&this.isBst(root.right,root.value,max)
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.right)
            this.postOrder(root.left)
            console.log(root.value)
        }
    }
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }else{
                queue.push(curr.right)
            }
        }
    }
    findKthLargest(k){
        let count = 0
        let result = null
        const reverseInOrder = (node)=>{
            if(!node||result!==null) return 
            reverseInOrder(root.right)
            count++
            if(count===k){
                result = node.value
                return
            }
            reverseInOrder(root.left)
        }
        reverseInOrder(this.root)
        return result
    }

    findKthSmallest(k){
        let count = 0
        let result = null
        const inOrder = (node)=>{
            if(!node||result!==null) return
            inOrder(root.left)
            count++
            if(count===k){
                result = node.value
                return
            }
            inOrder(root.right)
        }
        inOrder(root.value)
        return result
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
}
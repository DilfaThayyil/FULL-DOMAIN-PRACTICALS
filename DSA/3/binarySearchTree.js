class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

                // Big-O = O(n) (worst case)
                // Big-O = O(log n) (average case)

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

                // Big-O = O(log n) 

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    isBst(root,min,max){
        if(!root){
            return true
        }
        if(min && root.value <= min || max && root.value >=max){
            return false
        }
        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }

    findClosest(root,target){
        let closest = root.value
        while(root){
            if(Math.abs(target-closest) > Math.abs(target-root.value)){
                closest = root.value
            }
            if(target < root.value){
                root = root.left
            }else if (target > root.value){
                root = root.right
            }else{
                break
            }
        }
        return closest
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
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        // Use the optimized queue implementation
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
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

    findKthSmallest(k) {
        let count = 0;
        let result = null;

        const inorder = (node) => {
            if (!node || result !== null) return;
            inorder(node.left);
            count++;
            if (count === k) {
                result = node.value;
                return;
            }
            inorder(node.right);
        };
        inorder(this.root);
        return result;
    }

    findKthLargest(k) {
        let count = 0;
        let result = null;

        const reverseInorder = (node) => {
            if (!node || result !== null) return;
            reverseInorder(node.right);
            count++;
            if (count === k) {
                result = node.value;
                return;
            }
            reverseInorder(node.left);
        };

        reverseInorder(this.root);
        return result;
    }


                    // Big O = O(log n) (average case)
                    // Big O = O(n) (worst case)

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null){
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
    findHeight(root=this.root){
        if(root===null){
            return -1
        };
        let left = this.findHeight(root.left)
        let right = this.findHeight(root.right)
        return Math.max(left,right)+1
    }
}

const bst = new binarySearchTree()
console.log("tree is empty ?",bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.levelOrder()
console.log('height of tree:')
console.log(bst.findHeight())
// bst.preOrder(bst.root)
// console.log("----")
// bst.inOrder(bst.root)
// console.log("---")-
// bst.postOrder(bst.root)
// console.log(bst.search(bst.root,10))

// console.log(bst.search(bst.root,20))

// console.log(bst.findKthLargest(2))
// console.log(bst.findKthSmallest(2))
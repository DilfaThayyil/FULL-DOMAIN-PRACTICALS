class TrieNode{
    constructor(){
        this.children = {}
        this.isEndWord = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root
        for(const char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndWord = true
    }
    search(word){
        let node = this.root
        for(const char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndWord
    }
    startsWith(prefix){
        let node = this.root
        for(const char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
}

const trie = new Trie()
trie.insert("apple")
console.log(trie.search("apple"))
console.log(trie.search("mango"))
console.log(trie.startsWith("app"))
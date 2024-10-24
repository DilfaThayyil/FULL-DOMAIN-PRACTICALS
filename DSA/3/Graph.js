class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        delete this.adjacencyList[vertex]
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(this.adjacencyList[vertex2])&&
            this.adjacencyList[vertex2].has(this.adjacencyList[vertex1])
        )
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'=>'+[...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("C","B")
graph.addEdge("A","C")
graph.display()
console.log('after removing')
graph.removeVertex("A")
removeEdge("A","C")
graph.display()
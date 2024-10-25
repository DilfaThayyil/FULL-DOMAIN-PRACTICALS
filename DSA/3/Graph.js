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
    bfs(start){
        const queue = [start]
        const visited = new Set()
        while(queue.length>0){
            const vertex = queue.shift()
            if(!visited.has(vertex)){
                console.log(vertex)
                visited.add(vertex)
                queue.push(...this.adjacencyList[vertex])
            }
        }
    }
    dfs(start){
        const stack = [start]
        const visited = new Set()
        while(stack.length>0){
            const vertex = stack.pop()
            if(!visited.has(vertex)){
                console.log(vertex)
                visited.add(vertex)
                stack.push(...this.adjacencyList[vertex])
            }
        }
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
graph.dfs("A")
graph.bfs("A")
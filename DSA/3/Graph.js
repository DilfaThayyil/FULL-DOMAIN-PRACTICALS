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
        for(let neighbour of this.adjacencyList[vertex]){
            this.adjacencyList[neighbour].delete(vertex)
        }
        delete this.adjacencyList[vertex]
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1]?.delete(vertex2)
        this.adjacencyList[vertex2]?.delete(vertex1)
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

    hasCycles(){
        const visited = new Set()
        const dfsCycle = (vertex,parent)=>{
            visited.add(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    if(dfsCycle(neighbour,vertex)){
                        return true
                    }
                }
                else if(neighbour!==parent){
                    return true
                }
            }
            return false
        }
        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(dfsCycle(vertex,null)){
                    return true
                }   
                
            }
        }
        return false  
    }
    countCycles(){
        let visited = new Set()
        let cycleCount = 0
        const dfsCycle = (vertex,parent)=>{
            visited.add(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    dfsCycle(neighbour,vertex)
                }else if(neighbour!==parent){
                    cycleCount++
                }
            }
        }
        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                dfsCycle(vertex,null)
            }
        }
        return cycleCount/2
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
console.log(graph.hasCycles())
console.log("number of cycles :",graph.countCycles())
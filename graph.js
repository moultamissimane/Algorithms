// undirected, unweighted graph implementation using adjacency list
// adjacency means that two vertices are said to be adjacent if there is an edge connecting them directly.
class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    // addVertex is used to add a vertex to the list
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
    // addEdge is used to connect the vertices
    addEdge(source, destination) {
      if (!this.adjacencyList[source]) {
        this.addVertex(source);
      }
      if (!this.adjacencyList[destination]) {
        this.addVertex(destination);
      }
      this.adjacencyList[source].push(destination);
      this.adjacencyList[destination].push(source);
    }
    removeEdge(source, destination) {
      this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
      this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
    }
    removeVertex(vertex) {
      while (this.adjacencyList[vertex]) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }  
  }

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
    ["PHX", "LAX"],
    ["PHX", "JFK"],
    ["JFK", "OKH"],
    ["JFK", "HEL"],
    ["JFK", "LOS"],
    ["MEX", "LAX"],
    ["MEX", "BKK"],
    ["MEX", "LIM"],
    ["MEX", "EZE"],
    ["LIM", "BKK"]
];

const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    const dest = adjacencyList.get(destination);

    if (!dest) {
        addNode(destination)
    }
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);

routes.forEach(route => addEdge(...route));

console.log("result");
adjacencyList.forEach((value, key) => {
    console.log(key, value);
});
// Graph.js - Directed and Undirected Graph using Adjacency List

class Graph {
  constructor(isDirected = false) {
    this.adjacencyList = new Map();
    this.isDirected = isDirected;
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(src, dest) {
    this.addVertex(src);
    this.addVertex(dest);
    this.adjacencyList.get(src).push(dest);
    if (!this.isDirected) {
      this.adjacencyList.get(dest).push(src);
    }
  }

  removeEdge(src, dest) {
    this.adjacencyList.set(
      src,
      this.adjacencyList.get(src).filter((v) => v !== dest)
    );
    if (!this.isDirected) {
      this.adjacencyList.set(
        dest,
        this.adjacencyList.get(dest).filter((v) => v !== src)
      );
    }
  }

  removeVertex(vertex) {
    this.adjacencyList.delete(vertex);
    for (let [v, neighbors] of this.adjacencyList.entries()) {
      this.adjacencyList.set(
        v,
        neighbors.filter((n) => n !== vertex)
      );
    }
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        queue.push(
          ...this.adjacencyList.get(vertex).filter((n) => !visited.has(n))
        );
      }
    }

    return result;
  }

  dfs(start) {
    const visited = new Set();
    const result = [];

    const dfsRecursive = (vertex) => {
      if (!vertex || visited.has(vertex)) return;
      visited.add(vertex);
      result.push(vertex);
      this.adjacencyList
        .get(vertex)
        .forEach((neighbor) => dfsRecursive(neighbor));
    };

    dfsRecursive(start);
    return result;
  }

  print() {
    for (let [vertex, neighbors] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`);
    }
  }
}

export { Graph };

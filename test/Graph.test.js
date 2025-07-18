import { Graph } from "../src/Graph.js";

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph(true); // Directed graph
  });

  test("add vertices and edges", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");

    expect(graph.adjacencyList.get("A")).toContain("B");
  });

  test("BFS traversal", () => {
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");

    const bfsResult = graph.bfs("A");
    expect(bfsResult).toEqual(["A", "B", "C", "D"]);
  });

  test("DFS traversal", () => {
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");

    const dfsResult = graph.dfs("A");
    expect(dfsResult).toEqual(expect.arrayContaining(["A", "B", "D", "C"]));
  });
});

import { DisjointSet } from "../src/DisjointSet.js";

describe("DisjointSet", () => {
  let dsu;

  beforeEach(() => {
    dsu = new DisjointSet(5);
  });

  test("union and find", () => {
    dsu.union(0, 1);
    dsu.union(1, 2);
    expect(dsu.find(0)).toBe(dsu.find(2));
    expect(dsu.find(3)).not.toBe(dsu.find(0));
  });
});

import { BTree } from "../src/BTree.js";

describe("BTree", () => {
  let tree;

  beforeEach(() => {
    tree = new BTree(2); // Minimum degree 2
  });

  test("insert and search keys", () => {
    const keys = [10, 20, 5, 6, 12, 30, 7, 17];
    keys.forEach((k) => tree.insert(k));

    keys.forEach((k) => {
      expect(tree.search(k)).toBe(true);
    });

    expect(tree.search(100)).toBe(false);
  });
});

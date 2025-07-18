// RedBlackTree.test.js
import { RedBlackTree } from "../src/RedBlackTree.js";

describe("RedBlackTree", () => {
  let tree;

  beforeEach(() => {
    tree = new RedBlackTree();
  });

  test("insert and contains works correctly", () => {
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(15);

    expect(tree.contains(10)).toBe(true);
    expect(tree.contains(20)).toBe(true);
    expect(tree.contains(30)).toBe(true);
    expect(tree.contains(15)).toBe(true);
    expect(tree.contains(99)).toBe(false);
  });

  test("inserting duplicates does not break tree", () => {
    tree.insert(10);
    tree.insert(10);
    expect(tree.contains(10)).toBe(true);
  });

  test("root is always black", () => {
    tree.insert(10);
    expect(tree.root.color).toBe(false); // BLACK
  });
});

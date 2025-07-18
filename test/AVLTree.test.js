import { AVLTree } from "../src/AVLTree.js";

describe("AVLTree", () => {
  let avl;

  beforeEach(() => {
    avl = new AVLTree();
  });

  test("insert and contains", () => {
    avl.insert(10);
    avl.insert(20);
    avl.insert(5);

    expect(avl.contains(10)).toBe(true);
    expect(avl.contains(20)).toBe(true);
    expect(avl.contains(5)).toBe(true);
    expect(avl.contains(100)).toBe(false);
  });
});

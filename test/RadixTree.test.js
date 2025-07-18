import { RadixTree } from "../src/RadixTree";

test("should insert and search in RadixTree", () => {
  const tree = new RadixTree();
  tree.insert("apple");
  expect(tree.search("apple")).toBe(true);
  expect(tree.search("app")).toBe(false);
});

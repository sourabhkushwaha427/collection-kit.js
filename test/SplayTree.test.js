import { SplayTree } from "../src/SplayTree";

test("should insert into SplayTree", () => {
  const tree = new SplayTree();
  tree.insert(10);
  tree.insert(20);
  tree.insert(30);
  expect(tree.root.key).toBe(30);
});

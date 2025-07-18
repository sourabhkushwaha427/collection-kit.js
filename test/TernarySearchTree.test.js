import { TernarySearchTree } from "../src/TernarySearchTree";

test("should insert words", () => {
  const tst = new TernarySearchTree();
  tst.insert("cat");
  tst.insert("car");
  expect(tst.root).not.toBeNull();
});

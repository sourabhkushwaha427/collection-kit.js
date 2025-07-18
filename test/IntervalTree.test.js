import { IntervalTree } from "../src/IntervalTree";

test("should insert intervals", () => {
  const tree = new IntervalTree();
  tree.insert([15, 20]);
  tree.insert([10, 30]);
  expect(tree.root).not.toBeNull();
});

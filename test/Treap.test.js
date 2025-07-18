import { Treap } from "../src/Treap";

test("should insert into Treap", () => {
  const treap = new Treap();
  treap.insertKey(10);
  treap.insertKey(5);
  expect(treap.root).not.toBeNull();
});

import { KDTree } from "../src/KDTree";

test("should construct KDTree", () => {
  const points = [
    [2, 3],
    [5, 4],
    [9, 6],
    [4, 7],
    [8, 1],
    [7, 2],
  ];
  const tree = new KDTree(points);
  expect(tree.root).not.toBeNull();
});

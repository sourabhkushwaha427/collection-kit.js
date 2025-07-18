import { QuadTree, Rectangle } from "../src/QuadTree";

test("should insert point into QuadTree", () => {
  const boundary = new Rectangle(200, 200, 200, 200);
  const qt = new QuadTree(boundary, 4);
  expect(qt.insert({ x: 100, y: 100 })).toBe(true);
});

import { SegmentTree } from "../src/SegmentTree.js";

describe("SegmentTree", () => {
  let segTree;

  beforeEach(() => {
    segTree = new SegmentTree([1, 3, 5, 7, 9, 11]);
  });

  test("range query sum", () => {
    expect(segTree.rangeQuery(1, 4)).toBe(15); // 3 + 5 + 7
  });

  test("update value and query", () => {
    segTree.update(1, 10); // change index 1 from 3 to 10
    expect(segTree.rangeQuery(1, 4)).toBe(22); // 10 + 5 + 7
  });
});

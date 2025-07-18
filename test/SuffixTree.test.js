// test/SuffixTree.test.js

import { SuffixTree } from "../src/SuffixTree.js";

describe("SuffixTree", () => {
  let tree;

  beforeEach(() => {
    tree = new SuffixTree("banana");
  });

  test("search finds all pattern occurrences", () => {
    expect(tree.search("ana")).toEqual(expect.arrayContaining([1, 3]));
    expect(tree.search("ban")).toEqual([0]);
    expect(tree.search("nana")).toEqual([2]);
    expect(tree.search("apple")).toEqual([]);
  });

  test("search empty pattern returns all positions", () => {
    expect(tree.search("")).toEqual(expect.arrayContaining([0, 1, 2, 3, 4, 5]));
  });
});

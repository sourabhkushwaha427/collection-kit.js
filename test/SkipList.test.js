import { SkipList } from "../src/SkipList.js";

describe("SkipList", () => {
  let skipList;

  beforeEach(() => {
    skipList = new SkipList();
  });

  test("insert and search", () => {
    skipList.insert(5);
    skipList.insert(10);
    expect(skipList.search(5)).not.toBeNull();
    expect(skipList.search(10)).not.toBeNull();
    expect(skipList.search(15)).toBeNull();
  });

  test("delete", () => {
    skipList.insert(5);
    skipList.delete(5);
    expect(skipList.search(5)).toBeNull();
  });
});

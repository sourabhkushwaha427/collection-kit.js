import { BloomFilter } from "../src/BloomFilter.js";

describe("BloomFilter", () => {
  let bf;

  beforeEach(() => {
    bf = new BloomFilter(100, 4);
  });

  test("add and contains", () => {
    bf.add("apple");
    bf.add("banana");
    expect(bf.contains("apple")).toBe(true);
    expect(bf.contains("banana")).toBe(true);
    expect(bf.contains("orange")).toBe(false);
  });

  test("false positives possible but rare", () => {
    bf.add("test");
    let falsePositiveCount = 0;
    for (let i = 0; i < 1000; i++) {
      if (bf.contains("random" + i) && "random" + i !== "test")
        falsePositiveCount++;
    }
    expect(falsePositiveCount).toBeLessThan(10); // Rough estimate
  });
});

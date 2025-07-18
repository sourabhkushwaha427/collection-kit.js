import { Set } from "../src/Set.js";

describe("Set", () => {
  let setA, setB;

  beforeEach(() => {
    setA = new Set();
    setB = new Set();
  });

  test("add, has, delete, size, values", () => {
    setA.add(1);
    setA.add(2);
    expect(setA.has(1)).toBe(true);
    expect(setA.size()).toBe(2);
    setA.delete(1);
    expect(setA.has(1)).toBe(false);
    expect(setA.size()).toBe(1);
    expect(setA.values()).toContain(2);
  });

  test("union", () => {
    setA.add(1);
    setB.add(2);
    const unionSet = setA.union(setB);
    expect(unionSet.has(1)).toBe(true);
    expect(unionSet.has(2)).toBe(true);
  });

  test("intersection", () => {
    setA.add(1);
    setA.add(2);
    setB.add(2);
    setB.add(3);
    const intersection = setA.intersection(setB);
    expect(intersection.has(2)).toBe(true);
    expect(intersection.has(1)).toBe(false);
  });

  test("difference", () => {
    setA.add(1);
    setA.add(2);
    setB.add(2);
    const difference = setA.difference(setB);
    expect(difference.has(1)).toBe(true);
    expect(difference.has(2)).toBe(false);
  });

  test("isSubsetOf", () => {
    setA.add(1);
    setA.add(2);
    setB.add(1);
    setB.add(2);
    setB.add(3);
    expect(setA.isSubsetOf(setB)).toBe(true);
    expect(setB.isSubsetOf(setA)).toBe(false);
  });
});

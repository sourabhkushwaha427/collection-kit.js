import { HashMap } from "../src/HashMap.js";

describe("HashMap", () => {
  let map;

  beforeEach(() => {
    map = new HashMap();
  });

  test("set and get values", () => {
    map.set("key1", 100);
    map.set("key2", 200);

    expect(map.get("key1")).toBe(100);
    expect(map.get("key2")).toBe(200);
  });

  test("has and delete", () => {
    map.set("key1", 100);

    expect(map.has("key1")).toBe(true);
    map.delete("key1");
    expect(map.has("key1")).toBe(false);
  });

  test("size works correctly", () => {
    expect(map.size()).toBe(0);
    map.set("key1", 100);
    expect(map.size()).toBe(1);
  });
});

import { Trie } from "../src/Trie.js";

describe("Trie", () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  test("insert and search words", () => {
    trie.insert("apple");
    trie.insert("app");

    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(true);
    expect(trie.search("ap")).toBe(false);
  });

  test("startsWith prefix", () => {
    trie.insert("apple");

    expect(trie.startsWith("app")).toBe(true);
    expect(trie.startsWith("apl")).toBe(false);
  });
});

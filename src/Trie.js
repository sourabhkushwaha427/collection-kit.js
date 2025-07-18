// Trie.js - Prefix Tree Implementation

class TrieNode {
  constructor() {
    this.children = new Map(); // character -> TrieNode
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) return false;
      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (const char of prefix) {
      if (!current.children.has(char)) return false;
      current = current.children.get(char);
    }
    return true;
  }

  autoComplete(prefix) {
    let current = this.root;
    for (const char of prefix) {
      if (!current.children.has(char)) return [];
      current = current.children.get(char);
    }

    const suggestions = [];
    const dfs = (node, path) => {
      if (node.isEndOfWord) suggestions.push(prefix + path);
      for (const [char, child] of node.children.entries()) {
        dfs(child, path + char);
      }
    };

    dfs(current, "");
    return suggestions;
  }
}

export { Trie };

// src/SuffixTree.js

class SuffixTreeNode {
  constructor() {
    this.children = new Map();
    this.indexes = [];
  }
}

export class SuffixTree {
  constructor(text) {
    this.root = new SuffixTreeNode();
    this.text = text;
    this._buildNaive();
  }

  _buildNaive() {
    for (let i = 0; i < this.text.length; i++) {
      let current = this.root;
      for (let j = i; j < this.text.length; j++) {
        const c = this.text[j];
        if (!current.children.has(c)) {
          current.children.set(c, new SuffixTreeNode());
        }
        current = current.children.get(c);
        current.indexes.push(i);
      }
    }
  }

  search(pattern) {
    if (pattern === "") {
      return Array.from({ length: this.text.length }, (_, i) => i);
    }

    let current = this.root;
    for (const c of pattern) {
      if (!current.children.has(c)) return [];
      current = current.children.get(c);
    }
    return current.indexes;
  }
}

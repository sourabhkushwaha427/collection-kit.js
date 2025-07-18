// RadixTree.js
export class RadixNode {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.isWord = false;
  }
}

export class RadixTree {
  constructor() {
    this.root = new RadixNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char))
        node.children.set(char, new RadixNode(char));
      node = node.children.get(char);
    }
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
    }
    return node.isWord;
  }
}

// TernarySearchTree.js
class TSTNode {
  constructor(char) {
    this.char = char;
    this.left = null;
    this.eq = null;
    this.right = null;
    this.isEnd = false;
  }
}

export class TernarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(word) {
    this.root = this._insert(this.root, word, 0);
  }

  _insert(node, word, index) {
    if (!node) node = new TSTNode(word[index]);
    if (word[index] < node.char) {
      node.left = this._insert(node.left, word, index);
    } else if (word[index] > node.char) {
      node.right = this._insert(node.right, word, index);
    } else {
      if (index + 1 === word.length) {
        node.isEnd = true;
      } else {
        node.eq = this._insert(node.eq, word, index + 1);
      }
    }
    return node;
  }
}

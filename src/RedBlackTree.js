// RedBlackTree.js

const RED = true;
const BLACK = false;

class Node {
  constructor(value, color = RED) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export class RedBlackTree {
  constructor() {
    this.root = null;
  }

  isRed(node) {
    if (node === null) return false;
    return node.color === RED;
  }

  rotateLeft(h) {
    const x = h.right;
    h.right = x.left;
    if (x.left !== null) x.left.parent = h;
    x.left = h;
    x.color = h.color;
    h.color = RED;
    x.parent = h.parent;
    h.parent = x;
    return x;
  }

  rotateRight(h) {
    const x = h.left;
    h.left = x.right;
    if (x.right !== null) x.right.parent = h;
    x.right = h;
    x.color = h.color;
    h.color = RED;
    x.parent = h.parent;
    h.parent = x;
    return x;
  }

  flipColors(h) {
    h.color = RED;
    if (h.left) h.left.color = BLACK;
    if (h.right) h.right.color = BLACK;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
    this.root.color = BLACK;
    this.root.parent = null;
  }

  _insert(h, value) {
    if (h === null) return new Node(value);

    if (value < h.value) {
      h.left = this._insert(h.left, value);
      if (h.left) h.left.parent = h;
    } else if (value > h.value) {
      h.right = this._insert(h.right, value);
      if (h.right) h.right.parent = h;
    } else {
      // Duplicate value - ignore or update
    }

    // Fix Red-Black tree properties
    if (this.isRed(h.right) && !this.isRed(h.left)) h = this.rotateLeft(h);
    if (this.isRed(h.left) && this.isRed(h.left.left)) h = this.rotateRight(h);
    if (this.isRed(h.left) && this.isRed(h.right)) this.flipColors(h);

    return h;
  }

  contains(value) {
    let node = this.root;
    while (node !== null) {
      if (value === node.value) return true;
      else if (value < node.value) node = node.left;
      else node = node.right;
    }
    return false;
  }
}

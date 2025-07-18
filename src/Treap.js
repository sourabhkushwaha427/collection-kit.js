// Treap.js
class Node {
  constructor(key, priority = Math.random()) {
    this.key = key;
    this.priority = priority;
    this.left = null;
    this.right = null;
  }
}

export class Treap {
  constructor() {
    this.root = null;
  }

  rightRotate(y) {
    const x = y.left;
    y.left = x.right;
    x.right = y;
    return x;
  }

  leftRotate(x) {
    const y = x.right;
    x.right = y.left;
    y.left = x;
    return y;
  }

  insert(root, key) {
    if (!root) return new Node(key);
    if (key <= root.key) {
      root.left = this.insert(root.left, key);
      if (root.left.priority > root.priority) root = this.rightRotate(root);
    } else {
      root.right = this.insert(root.right, key);
      if (root.right.priority > root.priority) root = this.leftRotate(root);
    }
    return root;
  }

  insertKey(key) {
    this.root = this.insert(this.root, key);
  }
}

// SplayTree.js
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class SplayTree {
  constructor() {
    this.root = null;
  }

  rightRotate(x) {
    const y = x.left;
    x.left = y.right;
    y.right = x;
    return y;
  }

  leftRotate(x) {
    const y = x.right;
    x.right = y.left;
    y.left = x;
    return y;
  }

  splay(root, key) {
    if (!root || root.key === key) return root;
    if (key < root.key) {
      if (!root.left) return root;
      if (key < root.left.key) {
        root.left.left = this.splay(root.left.left, key);
        root = this.rightRotate(root);
      } else if (key > root.left.key) {
        root.left.right = this.splay(root.left.right, key);
        if (root.left.right) root.left = this.leftRotate(root.left);
      }
      return root.left ? this.rightRotate(root) : root;
    } else {
      if (!root.right) return root;
      if (key > root.right.key) {
        root.right.right = this.splay(root.right.right, key);
        root = this.leftRotate(root);
      } else if (key < root.right.key) {
        root.right.left = this.splay(root.right.left, key);
        if (root.right.left) root.right = this.rightRotate(root.right);
      }
      return root.right ? this.leftRotate(root) : root;
    }
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
      return;
    }
    this.root = this.splay(this.root, key);
    if (this.root.key === key) return;

    const newNode = new Node(key);
    if (key < this.root.key) {
      newNode.right = this.root;
      newNode.left = this.root.left;
      this.root.left = null;
    } else {
      newNode.left = this.root;
      newNode.right = this.root.right;
      this.root.right = null;
    }
    this.root = newNode;
  }
}

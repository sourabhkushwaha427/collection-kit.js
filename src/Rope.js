// Rope.js
class RopeNode {
  constructor(str) {
    this.str = str;
    this.left = null;
    this.right = null;
    this.weight = str.length;
  }
}

export class Rope {
  constructor(str = "") {
    this.root = new RopeNode(str);
  }

  concat(otherRope) {
    const newRoot = new RopeNode("");
    newRoot.left = this.root;
    newRoot.right = otherRope.root;
    newRoot.weight = this._weight(newRoot.left);
    this.root = newRoot;
  }

  _weight(node) {
    if (!node) return 0;
    return node.weight + this._weight(node.right);
  }
}

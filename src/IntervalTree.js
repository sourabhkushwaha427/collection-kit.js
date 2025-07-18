// IntervalTree.js
class IntervalNode {
  constructor(interval) {
    this.interval = interval; // [start, end]
    this.max = interval[1];
    this.left = null;
    this.right = null;
  }
}

export class IntervalTree {
  constructor() {
    this.root = null;
  }

  insert(interval) {
    this.root = this._insert(this.root, interval);
  }

  _insert(node, interval) {
    if (!node) return new IntervalNode(interval);
    if (interval[0] < node.interval[0]) {
      node.left = this._insert(node.left, interval);
    } else {
      node.right = this._insert(node.right, interval);
    }
    if (node.max < interval[1]) node.max = interval[1];
    return node;
  }
}

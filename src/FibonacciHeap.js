// FibonacciHeap.js

class Node {
  constructor(key) {
    this.key = key;
    this.degree = 0;
    this.parent = null;
    this.child = null;
    this.left = this;
    this.right = this;
    this.mark = false;
  }
}

export class FibonacciHeap {
  constructor() {
    this.min = null;
    this.n = 0;
  }

  insert(key) {
    const node = new Node(key);
    this.min = this._mergeLists(this.min, node);
    this.n++;
    return node;
  }

  getMin() {
    return this.min ? this.min.key : null;
  }

  extractMin() {
    const z = this.min;
    if (z != null) {
      if (z.child != null) {
        let children = [];
        let x = z.child;
        do {
          children.push(x);
          x = x.right;
        } while (x !== z.child);

        for (const child of children) {
          child.parent = null;
          this.min = this._mergeLists(this.min, child);
        }
      }

      z.left.right = z.right;
      z.right.left = z.left;

      if (z === z.right) {
        this.min = null;
      } else {
        this.min = z.right;
        this._consolidate();
      }
      this.n--;
      return z.key;
    }
    return null;
  }

  _consolidate() {
    const maxDegree = Math.floor(Math.log2(this.n)) + 1;
    const A = new Array(maxDegree).fill(null);

    let nodes = [];
    let x = this.min;
    if (x != null) {
      do {
        nodes.push(x);
        x = x.right;
      } while (x !== this.min);
    }

    for (let w of nodes) {
      let x = w;
      let d = x.degree;
      while (A[d] != null) {
        let y = A[d];
        if (x.key > y.key) {
          [x, y] = [y, x];
        }
        this._link(y, x);
        A[d] = null;
        d++;
      }
      A[d] = x;
    }

    this.min = null;
    for (let i = 0; i < A.length; i++) {
      if (A[i] != null) {
        this.min = this._mergeLists(this.min, A[i]);
      }
    }
  }

  _link(y, x) {
    y.left.right = y.right;
    y.right.left = y.left;
    y.parent = x;

    if (x.child == null) {
      x.child = y;
      y.left = y;
      y.right = y;
    } else {
      y.left = x.child;
      y.right = x.child.right;
      x.child.right.left = y;
      x.child.right = y;
    }
    x.degree++;
    y.mark = false;
  }

  _mergeLists(a, b) {
    if (!a) return b;
    if (!b) return a;

    const temp = a.right;
    a.right = b.right;
    a.right.left = a;
    b.right = temp;
    b.right.left = b;

    return a.key < b.key ? a : b;
  }
}

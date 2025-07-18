// FenwickTree.js - Binary Indexed Tree (Fenwick Tree) for efficient prefix sums

export class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
    this.n = size;
  }

  update(index, delta) {
    index++; // Convert to 1-based index
    while (index <= this.n) {
      this.tree[index] += delta;
      index += index & -index;
    }
  }

  query(index) {
    index++; // Convert to 1-based index
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }

  rangeQuery(left, right) {
    return this.query(right) - this.query(left - 1);
  }
}

// Example Usage:
// const bit = new FenwickTree(10);
// bit.update(0, 5);
// bit.update(3, 2);
// bit.rangeQuery(0, 3); // returns 7

// SegmentTree.js - For efficient range queries and updates (sum example)

export class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(2 * this.n).fill(0);
    this.build(arr);
  }

  build(arr) {
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1];
    }
  }

  update(index, value) {
    let pos = index + this.n;
    this.tree[pos] = value;
    while (pos > 1) {
      pos >>= 1;
      this.tree[pos] = this.tree[2 * pos] + this.tree[2 * pos + 1];
    }
  }

  rangeQuery(left, right) {
    left += this.n;
    right += this.n;
    let sum = 0;
    while (left < right) {
      if (left & 1) sum += this.tree[left++];
      if (right & 1) sum += this.tree[--right];
      left >>= 1;
      right >>= 1;
    }
    return sum;
  }
}

// Example usage:
// const st = new SegmentTree([1, 2, 3, 4, 5]);
// console.log(st.rangeQuery(1, 4)); // sum of [2,3,4] => 9
// st.update(2, 10); // arr[2] = 10
// console.log(st.rangeQuery(1, 4)); // sum now [2,10,4] => 16

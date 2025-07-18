// BTree.js

class BTreeNode {
  constructor(t, leaf = false) {
    this.t = t; // Minimum degree (defines the range for number of keys)
    this.leaf = leaf; // Is true when node is leaf
    this.keys = []; // An array of keys
    this.children = []; // An array of child pointers
  }

  findKey(k) {
    let idx = 0;
    while (idx < this.keys.length && this.keys[idx] < k) {
      ++idx;
    }
    return idx;
  }

  insertNonFull(k) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      // Insert new key at the correct position in leaf
      while (i >= 0 && this.keys[i] > k) {
        i--;
      }
      this.keys.splice(i + 1, 0, k);
    } else {
      // Find child to recurse
      while (i >= 0 && this.keys[i] > k) i--;
      i++;
      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i, this.children[i]);

        if (this.keys[i] < k) i++;
      }
      this.children[i].insertNonFull(k);
    }
  }

  splitChild(i, y) {
    const t = this.t;
    const z = new BTreeNode(t, y.leaf);
    z.keys = y.keys.splice(t);
    if (!y.leaf) {
      z.children = y.children.splice(t);
    }
    this.children.splice(i + 1, 0, z);
    this.keys.splice(i, 0, y.keys.pop());
  }

  search(k) {
    let i = 0;
    while (i < this.keys.length && k > this.keys[i]) i++;

    if (i < this.keys.length && this.keys[i] === k) return this;

    if (this.leaf) return null;

    return this.children[i].search(k);
  }
}

export class BTree {
  constructor(t = 2) {
    this.t = t;
    this.root = new BTreeNode(t, true);
  }

  insert(k) {
    const r = this.root;
    if (r.keys.length === 2 * this.t - 1) {
      const s = new BTreeNode(this.t, false);
      s.children[0] = r;
      s.splitChild(0, r);
      let i = 0;
      if (s.keys[0] < k) i++;
      s.children[i].insertNonFull(k);
      this.root = s;
    } else {
      r.insertNonFull(k);
    }
  }

  search(k) {
    return this.root ? this.root.search(k) !== null : false;
  }
}

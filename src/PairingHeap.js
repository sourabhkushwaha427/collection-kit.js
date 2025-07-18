// PairingHeap.js

class Node {
  constructor(key) {
    this.key = key;
    this.child = null;
    this.sibling = null;
    this.prev = null;
  }
}

export class PairingHeap {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(key) {
    const node = new Node(key);
    this.root = this._compareAndLink(this.root, node);
    return node;
  }

  getMin() {
    return this.root ? this.root.key : null;
  }

  extractMin() {
    if (this.root === null) return null;
    const minKey = this.root.key;
    if (!this.root.child) {
      this.root = null;
    } else {
      this.root = this._combineSiblings(this.root.child);
    }
    return minKey;
  }

  _compareAndLink(first, second) {
    if (!first) return second;
    if (!second) return first;

    if (second.key < first.key) {
      // second becomes new root
      second.prev = first.prev;
      first.prev = second;
      first.sibling = second.child;
      if (first.sibling) first.sibling.prev = first;
      second.child = first;
      return second;
    } else {
      // first stays root
      second.prev = first;
      first.sibling = second.sibling;
      if (first.sibling) first.sibling.prev = first;
      second.sibling = first.child;
      if (second.sibling) second.sibling.prev = second;
      first.child = second;
      return first;
    }
  }

  _combineSiblings(firstSibling) {
    if (!firstSibling || !firstSibling.sibling) {
      return firstSibling;
    }

    // Store the subtrees in an array
    let siblings = [];
    let current = firstSibling;
    while (current) {
      siblings.push(current);
      current.prev = null;
      let next = current.sibling;
      current.sibling = null;
      current = next;
    }

    // Combine pairs from left to right
    let i = 0;
    while (i + 1 < siblings.length) {
      siblings[i] = this._compareAndLink(siblings[i], siblings[i + 1]);
      i += 2;
    }

    // If odd number of siblings, last one remains
    let j = i - 2;

    // Combine from right to left
    while (j >= 2) {
      siblings[j - 2] = this._compareAndLink(siblings[j - 2], siblings[j]);
      j -= 2;
    }

    return siblings[0];
  }
}

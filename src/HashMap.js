// HashMap.js - Custom Hash Map Implementation using Separate Chaining

class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashMap {
  constructor(size = 53) {
    this.bucketSize = size;
    this.buckets = new Array(size).fill(null);
    this.count = 0;
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    const stringKey = String(key);
    for (let i = 0; i < Math.min(stringKey.length, 100); i++) {
      const char = stringKey[i];
      total = (total * PRIME + char.charCodeAt(0)) % this.bucketSize;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    let head = this.buckets[index];
    while (head) {
      if (head.key === key) {
        head.value = value;
        return;
      }
      head = head.next;
    }
    const newNode = new HashNode(key, value);
    newNode.next = this.buckets[index];
    this.buckets[index] = newNode;
    this.count++;
  }

  get(key) {
    const index = this._hash(key);
    let head = this.buckets[index];
    while (head) {
      if (head.key === key) return head.value;
      head = head.next;
    }
    return undefined;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  delete(key) {
    const index = this._hash(key);
    let head = this.buckets[index];
    let prev = null;
    while (head) {
      if (head.key === key) {
        if (prev) {
          prev.next = head.next;
        } else {
          this.buckets[index] = head.next;
        }
        this.count--;
        return true;
      }
      prev = head;
      head = head.next;
    }
    return false;
  }

  keys() {
    const result = [];
    for (const bucket of this.buckets) {
      let head = bucket;
      while (head) {
        result.push(head.key);
        head = head.next;
      }
    }
    return result;
  }

  values() {
    const result = [];
    for (const bucket of this.buckets) {
      let head = bucket;
      while (head) {
        result.push(head.value);
        head = head.next;
      }
    }
    return result;
  }

  size() {
    return this.count;
  }
}

export { HashMap };

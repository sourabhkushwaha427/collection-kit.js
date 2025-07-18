// BloomFilter.js

export class BloomFilter {
  constructor(size = 1000, hashCount = 3) {
    this.size = size;
    this.hashCount = hashCount;
    this.bitArray = new Array(size).fill(false);
  }

  // Simple hash functions using DJB2 with different seeds
  _hash(str, seed) {
    let hash = 5381 + seed;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return Math.abs(hash) % this.size;
  }

  add(item) {
    for (let i = 0; i < this.hashCount; i++) {
      const idx = this._hash(item.toString(), i);
      this.bitArray[idx] = true;
    }
  }

  contains(item) {
    for (let i = 0; i < this.hashCount; i++) {
      const idx = this._hash(item.toString(), i);
      if (!this.bitArray[idx]) return false;
    }
    return true;
  }
}

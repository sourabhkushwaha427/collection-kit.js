// SkipList.js - probabilistic balanced data structure for fast search/insert/delete

class SkipListNode {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

export class SkipList {
  constructor(maxLevel = 16, p = 0.5) {
    this.maxLevel = maxLevel;
    this.p = p;
    this.level = 0;
    this.header = new SkipListNode(null, this.maxLevel);
  }

  randomLevel() {
    let lvl = 0;
    while (Math.random() < this.p && lvl < this.maxLevel) {
      lvl++;
    }
    return lvl;
  }

  insert(value) {
    const update = new Array(this.maxLevel + 1);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (!current || current.value !== value) {
      const lvl = this.randomLevel();
      if (lvl > this.level) {
        for (let i = this.level + 1; i <= lvl; i++) {
          update[i] = this.header;
        }
        this.level = lvl;
      }
      const newNode = new SkipListNode(value, lvl);
      for (let i = 0; i <= lvl; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  search(value) {
    let current = this.header;
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
    }
    current = current.forward[0];
    return current && current.value === value ? current : null;
  }

  delete(value) {
    const update = new Array(this.maxLevel + 1);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i];
      }
      update[i] = current;
    }

    current = current.forward[0];

    if (current && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].forward[i] !== current) break;
        update[i].forward[i] = current.forward[i];
      }
      while (this.level > 0 && !this.header.forward[this.level]) {
        this.level--;
      }
    }
  }
}

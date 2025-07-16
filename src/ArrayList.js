export class ArrayList {
  constructor() {
    this.items = [];
  }

  add(element) {
    this.items.push(element);
  }

  get(index) {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError("Index out of bounds");
    }
    return this.items[index];
  }

  size() {
    return this.items.length;
  }

  remove(index) {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError("Index out of bounds");
    }
    this.items.splice(index, 1);
  }
}

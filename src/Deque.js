export class Deque {
  constructor() {
    this.items = [];
  }

  addFront(element) {
    this.items.unshift(element);
  }

  addBack(element) {
    this.items.push(element);
  }

  removeFront() {
    if (this.isEmpty()) throw new Error("Deque is empty");
    return this.items.shift();
  }

  removeBack() {
    if (this.isEmpty()) throw new Error("Deque is empty");
    return this.items.pop();
  }

  front() {
    if (this.isEmpty()) throw new Error("Deque is empty");
    return this.items[0];
  }

  back() {
    if (this.isEmpty()) throw new Error("Deque is empty");
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// src/LinkedList.js
export class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds");
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.value;
  }

  size() {
    return this.length;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds");
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
    }
    this.length--;
  }
}

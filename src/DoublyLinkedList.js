export class DoublyLinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds");
    }
    let current;
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current.value;
  }

  size() {
    return this.length;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds");
    }

    let current;
    if (index === 0) {
      current = this.head;
      this.head = current.next;
      if (this.head) this.head.prev = null;
      if (this.length === 1) this.tail = null;
    } else if (index === this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      if (index < this.length / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > index; i--) {
          current = current.prev;
        }
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.length--;
  }
}

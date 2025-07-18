export class CircularQueue {
  constructor(capacity) {
    if (capacity <= 0) throw new Error("Capacity must be greater than 0");
    this.capacity = capacity;
    this.queue = new Array(capacity);
    this.head = 0;
    this.tail = 0;
    this.size_ = 0;
  }

  enqueue(element) {
    if (this.isFull()) throw new Error("Queue is full");
    this.queue[this.tail] = element;
    this.tail = (this.tail + 1) % this.capacity;
    this.size_++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty");
    const element = this.queue[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.size_--;
    return element;
  }

  front() {
    if (this.isEmpty()) throw new Error("Queue is empty");
    return this.queue[this.head];
  }

  size() {
    return this.size_;
  }

  isEmpty() {
    return this.size_ === 0;
  }

  isFull() {
    return this.size_ === this.capacity;
  }
}

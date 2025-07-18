import { CircularQueue } from "../src/CircularQueue";

test("CircularQueue enqueue, dequeue, front, size, isEmpty, isFull", () => {
  const cq = new CircularQueue(3);

  expect(cq.isEmpty()).toBe(true);
  expect(cq.isFull()).toBe(false);

  cq.enqueue("a");
  cq.enqueue("b");
  cq.enqueue("c");

  expect(cq.isFull()).toBe(true);
  expect(cq.size()).toBe(3);
  expect(cq.front()).toBe("a");

  expect(() => cq.enqueue("d")).toThrow("Queue is full");

  expect(cq.dequeue()).toBe("a");
  expect(cq.size()).toBe(2);
  expect(cq.isFull()).toBe(false);

  cq.enqueue("d");
  expect(cq.isFull()).toBe(true);
  expect(cq.front()).toBe("b");

  expect(cq.dequeue()).toBe("b");
  expect(cq.dequeue()).toBe("c");
  expect(cq.dequeue()).toBe("d");

  expect(cq.isEmpty()).toBe(true);
  expect(() => cq.dequeue()).toThrow("Queue is empty");
});

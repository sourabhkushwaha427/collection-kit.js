import { PriorityQueue } from "../src/PriorityQueue";

test("PriorityQueue enqueue, dequeue, peek, size, isEmpty", () => {
  const pq = new PriorityQueue();

  expect(pq.isEmpty()).toBe(true);

  pq.enqueue(5);
  pq.enqueue(3);
  pq.enqueue(8);
  pq.enqueue(1);

  expect(pq.size()).toBe(4);
  expect(pq.peek()).toBe(1);

  expect(pq.dequeue()).toBe(1);
  expect(pq.peek()).toBe(3);
  expect(pq.size()).toBe(3);

  pq.enqueue(0);
  expect(pq.peek()).toBe(0);

  expect(pq.dequeue()).toBe(0);
  expect(pq.dequeue()).toBe(3);
  expect(pq.dequeue()).toBe(5);
  expect(pq.dequeue()).toBe(8);

  expect(pq.isEmpty()).toBe(true);
});

import { Queue } from "../src/Queue";

test("Queue enqueue, dequeue, front, size, isEmpty", () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);

  queue.enqueue("a");
  queue.enqueue("b");
  expect(queue.size()).toBe(2);
  expect(queue.front()).toBe("a");

  expect(queue.dequeue()).toBe("a");
  expect(queue.size()).toBe(1);
  expect(queue.front()).toBe("b");
});

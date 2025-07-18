import { Deque } from "../src/Deque";

test("Deque addFront, addBack, removeFront, removeBack, front, back, size, isEmpty", () => {
  const deque = new Deque();

  expect(deque.isEmpty()).toBe(true);

  deque.addBack("x");
  deque.addBack("y");
  deque.addFront("z");

  expect(deque.size()).toBe(3);
  expect(deque.front()).toBe("z");
  expect(deque.back()).toBe("y");

  expect(deque.removeFront()).toBe("z");
  expect(deque.removeBack()).toBe("y");
  expect(deque.size()).toBe(1);

  expect(deque.front()).toBe("x");
  expect(deque.back()).toBe("x");

  expect(deque.removeBack()).toBe("x");
  expect(deque.isEmpty()).toBe(true);
});

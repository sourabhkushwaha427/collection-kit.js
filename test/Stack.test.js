import { Stack } from "../src/Stack";

test("Stack push, pop, peek, size, isEmpty", () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);

  stack.push(10);
  stack.push(20);
  expect(stack.size()).toBe(2);
  expect(stack.peek()).toBe(20);

  expect(stack.pop()).toBe(20);
  expect(stack.size()).toBe(1);
  expect(stack.peek()).toBe(10);
});

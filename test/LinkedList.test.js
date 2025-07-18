import { LinkedList } from "../src/LinkedList";

test("LinkedList add, get, remove, size", () => {
  const list = new LinkedList();
  list.add("first");
  list.add("second");
  list.add("third");

  expect(list.size()).toBe(3);
  expect(list.get(0)).toBe("first");
  expect(list.get(1)).toBe("second");
  expect(list.get(2)).toBe("third");

  list.remove(1);
  expect(list.size()).toBe(2);
  expect(list.get(1)).toBe("third");
});

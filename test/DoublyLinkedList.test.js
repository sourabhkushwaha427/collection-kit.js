import { DoublyLinkedList } from "../src/DoublyLinkedList";

test("DoublyLinkedList add, get, remove, size", () => {
  const list = new DoublyLinkedList();

  list.add("a");
  list.add("b");
  list.add("c");

  expect(list.size()).toBe(3);
  expect(list.get(0)).toBe("a");
  expect(list.get(1)).toBe("b");
  expect(list.get(2)).toBe("c");

  list.remove(1);
  expect(list.size()).toBe(2);
  expect(list.get(0)).toBe("a");
  expect(list.get(1)).toBe("c");

  list.remove(0);
  expect(list.size()).toBe(1);
  expect(list.get(0)).toBe("c");

  list.remove(0);
  expect(list.size()).toBe(0);
});

import { ArrayList } from "../src/ArrayList";

test("ArrayList add and get", () => {
  const list = new ArrayList();
  list.add("hello");
  list.add("world");
  expect(list.get(0)).toBe("hello");
  expect(list.get(1)).toBe("world");
  expect(list.size()).toBe(2);
  list.remove(0);
  expect(list.get(0)).toBe("world");
  expect(list.size()).toBe(1);
});

import { FibonacciHeap } from "../src/FibonacciHeap.js";

describe("FibonacciHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new FibonacciHeap();
  });

  test("insert and getMin", () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);

    expect(heap.getMin()).toBe(5);
  });

  test("extractMin returns min and updates heap", () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);

    expect(heap.extractMin()).toBe(5);
    expect(heap.getMin()).toBe(10);
    expect(heap.extractMin()).toBe(10);
    expect(heap.extractMin()).toBe(20);
    expect(heap.extractMin()).toBe(null);
  });
});

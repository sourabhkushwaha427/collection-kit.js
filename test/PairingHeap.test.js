import { PairingHeap } from "../src/PairingHeap.js";

describe("PairingHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new PairingHeap();
  });

  test("insert and getMin", () => {
    heap.insert(20);
    heap.insert(15);
    heap.insert(10);

    expect(heap.getMin()).toBe(10);
  });

  test("extractMin returns min and updates heap", () => {
    heap.insert(20);
    heap.insert(15);
    heap.insert(10);

    expect(heap.extractMin()).toBe(10);
    expect(heap.getMin()).toBe(15);
    expect(heap.extractMin()).toBe(15);
    expect(heap.extractMin()).toBe(20);
    expect(heap.extractMin()).toBe(null);
  });

  test("isEmpty works correctly", () => {
    expect(heap.isEmpty()).toBe(true);
    heap.insert(5);
    expect(heap.isEmpty()).toBe(false);
  });
});

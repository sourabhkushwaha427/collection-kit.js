# 📦 collection-kit

A modern and modular JavaScript data structures library – built for performance, flexibility, and ease of use.

![npm](https://img.shields.io/npm/v/collection-kit)
![license](https://img.shields.io/npm/l/collection-kit)
![downloads](https://img.shields.io/npm/dw/collection-kit)

---

## 🚀 Installation

```bash
npm install collection-kit

📚 Usage
js
Copy
Edit
import { LinkedList, Stack, Queue } from "collection-kit";

// LinkedList example
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);

console.log("Size of LinkedList:", list.size());         // 3
console.log("First element:", list.get(0));              // 10
console.log("All elements:");
for (let i = 0; i < list.size(); i++) {
  console.log(`Element ${i}:`, list.get(i));
}
```

🧠 Available Data Structures
🔹 Linear LinkedList

DoublyLinkedList

CircularQueue

Queue

Deque

Stack

🔹 Tree
AVLTree

RedBlackTree

BTree

SegmentTree

FenwickTree

SuffixTree

SplayTree

Treap

RadixTree

VanEmdeBoasTree

TernarySearchTree

IntervalTree

Rope

🔹 Graph & Search
Graph

Trie

AhoCorasick

🔹 Heap & Priority Queues
PriorityQueue

FibonacciHeap

PairingHeap

🔹 Hash-based
HashMap

Set

BloomFilter

CountMinSketch

🔹 Spatial
KDTree

QuadTree

🔹 Advanced
DisjointSet (Union-Find)

SkipList

Save as `README.md` in your project root and run:

```bash
npm publish
```

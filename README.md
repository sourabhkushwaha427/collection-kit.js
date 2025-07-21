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

🔹ArrayList
🔹LinkedList
🔹Stack
🔹Queue
🔹DoublyLinkedList
🔹Deque
🔹PriorityQueue
🔹CircularQueue
🔹Graph
🔹Trie
🔹HashMap
🔹Set
🔹SegmentTree
🔹DisjointSet
🔹SkipList
🔹AVLTree
🔹RedBlackTree
🔹BTree
🔹FenwickTree
🔹FibonacciHeap
🔹PairingHeap
🔹SuffixTree
🔹BloomFilter
🔹KDTree
🔹QuadTree
🔹SplayTree
🔹Treap
🔹RadixTree
🔹VanEmdeBoasTree
🔹AhoCorasick
🔹CountMinSketch
🔹TernarySearchTree
🔹IntervalTree
🔹Rope

🔹ArrayList
Definition: An ArrayList is a resizable array implementation of the List interface. It allows for dynamic resizing, meaning that the size of the array can grow or shrink as elements are added or removed. ArrayLists provide fast random access to elements, as they are stored in contiguous memory locations, making it efficient to retrieve elements by their index. However, inserting or deleting elements, especially in the middle of the list, can be less efficient due to the need to shift elements.

Key Features:

Dynamic Sizing: Automatically resizes when elements are added or removed.
Random Access: Provides O(1) time complexity for accessing elements by index.
Insertion/Deletion: Insertion and deletion operations can take O(n) time in the worst case, as elements may need to be shifted.
Memory Efficiency: Uses contiguous memory, which can lead to better cache performance compared to linked structures.
Common Operations:

Add: Append an element to the end of the list or insert it at a specific index.
Remove: Delete an element from the list by value or index.
Get: Retrieve an element at a specific index.
Set: Update the value of an element at a specific index.
Size: Return the number of elements in the list.
import statement: import { ArrayList } from "collection-kit";

🔹LinkedList
Definition: A LinkedList is a linear data structure where each element (node) contains a reference (link) to the next node in the sequence. This allows for efficient insertion and deletion of elements, as nodes can be added or removed without shifting other elements.

Key Features:

Dynamic Size: Can grow and shrink in size as needed.
Efficient Insertions/Deletions: O(1) time complexity for adding or removing elements at the beginning or end.
Sequential Access: O(n) time complexity for accessing elements by index.
Common Operations:

Add: Insert an element at the beginning, end, or a specific index.
Remove: Delete an element by value or index.
Get: Retrieve an element at a specific index.
Size: Return the number of elements in the list.
Import Statement: import { LinkedList } from "collection-kit";

🔹Stack
Definition: A Stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements can be added and removed only from the top of the stack.

Key Features:

LIFO Order: The last element added is the first one to be removed.
Dynamic Size: Can grow and shrink as elements are added or removed.
Common Operations:

Push: Add an element to the top of the stack.
Pop: Remove and return the top element.
Peek: Return the top element without removing it.
Size: Return the number of elements in the stack.
Import Statement: import { Stack } from "collection-kit";

🔹Queue
Definition: A Queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the back and removed from the front.

Key Features:

FIFO Order: The first element added is the first one to be removed.
Dynamic Size: Can grow and shrink as elements are added or removed.
Common Operations:

Enqueue: Add an element to the back of the queue.
Dequeue: Remove and return the front element.
Peek: Return the front element without removing it.
Size: Return the number of elements in the queue.
Import Statement: import { Queue } from "collection-kit";

🔹DoublyLinkedList
Definition: A DoublyLinkedList is a linear data structure where each node contains a reference to both the next and previous nodes, allowing traversal in both directions.

Key Features:

Bidirectional Traversal: Can be traversed in both forward and backward directions.
Efficient Insertions/Deletions: O(1) time complexity for adding or removing elements at both ends.
Common Operations:

Add: Insert an element at the beginning, end, or a specific index.
Remove: Delete an element by value or index.
Get: Retrieve an element at a specific index.
Size: Return the number of elements in the list.
Import Statement: import { DoublyLinkedList } from "collection-kit";

🔹Deque
Definition: A Deque (Double-Ended Queue) is a linear data structure that allows insertion and deletion of elements from both ends.

Key Features:

Flexible Operations: Can be used as both a stack and a queue.
Dynamic Size: Can grow and shrink as elements are added or removed.
Common Operations:

AddFirst: Insert an element at the front.
AddLast: Insert an element at the back.
RemoveFirst: Remove and return the front element.
RemoveLast: Remove and return the back element.
Size: Return the number of elements in the deque.
Import Statement: import { Deque } from "collection-kit";

🔹PriorityQueue
Definition: A PriorityQueue is a data structure that stores elements along with their priorities, allowing for efficient retrieval of the highest (or lowest) priority element.

Key Features:

Priority-Based Ordering: Elements are ordered based on their priority rather than their insertion order.
Dynamic Size: Can grow and shrink as elements are added or removed.
Common Operations:

Enqueue: Add an element with a specified priority.
Dequeue: Remove and return the element with the highest priority.
Peek: Return the highest priority element without removing it.
Size: Return the number of elements in the priority queue.
Import Statement: import { PriorityQueue } from "collection-kit";

🔹CircularQueue
Definition: A CircularQueue is a linear data structure that uses a fixed-size array in a circular manner, allowing for efficient use of space.

Key Features:

Circular Structure: The last position is connected back to the first position, allowing for efficient space utilization.
Fixed Size: Has a maximum capacity, which can lead to overflow if not managed properly.
Common Operations:

Enqueue: Add an element to the back of the queue.
Dequeue: Remove and return the front element.
Peek: Return the front element without removing it.
Size: Return the number of elements in the circular queue.
Import Statement: import { CircularQueue } from "collection-kit";

🔹Graph
Definition: A Graph is a collection of nodes (vertices) and edges that connect pairs of nodes, used to represent relationships between objects.

Key Features:

Flexible Structure: Can represent various types of relationships (e.g., social networks, transportation systems).
Directed/Undirected: Can have directed edges (one-way) or undirected edges (two-way).
Common Operations:

AddVertex: Add a new vertex to the graph.
AddEdge: Connect two vertices with an edge.
RemoveVertex: Remove a vertex and its associated edges.
RemoveEdge: Remove an edge between two vertices.
GetNeighbors: Retrieve all adjacent vertices for a given vertex.
Import Statement: import { Graph } from "collection-kit";

🔹Trie
Definition: A Trie (prefix tree) is a tree-like data structure used to store a dynamic set of strings, allowing for efficient retrieval of keys based on their prefixes.

Key Features:

Prefix-Based Storage: Efficiently stores strings by sharing common prefixes.
Fast Search: Allows for quick lookups, insertions, and deletions.
Common Operations:

Insert: Add a new string to the trie.
Search: Check if a string exists in the trie.
StartsWith: Check if any string in the trie starts with a given prefix.
Delete: Remove a string from the trie.
Import Statement: import { Trie } from "collection-kit";

🔹HashMap
Definition: A HashMap is a data structure that implements an associative array, mapping keys to values using a hash function for efficient retrieval.

Key Features:

Key-Value Pairs: Stores data in key-value pairs for quick access.
Dynamic Size: Can grow and shrink as elements are added or removed.
Common Operations:

Put: Add a key-value pair to the map.
Get: Retrieve the value associated with a given key.
Remove: Delete a key-value pair by key.
ContainsKey: Check if a key exists in the map.
Import Statement: import { HashMap } from "collection-kit";

🔹Set
Definition: A Set is a collection of unique elements that supports efficient membership tests and operations like union and intersection.

Key Features:

Unique Elements: Does not allow duplicate values.
Dynamic Size: Can grow and shrink as elements are added or removed.
Common Operations:

Add: Insert an element into the set.
Remove: Delete an element from the set.
Contains: Check if an element exists in the set.
Size: Return the number of unique elements in the set.
Import Statement: import { Set } from "collection-kit";

🔹SegmentTree
Definition: A SegmentTree is a tree data structure used for storing intervals or segments, allowing efficient querying of segment overlaps and range queries.

Key Features:

Efficient Range Queries: Supports querying sums, minimums, or maximums over a range of elements.
Dynamic Size: Can be built and modified as needed.
Common Operations:

Build: Construct the segment tree from an array.
Update: Modify an element in the array and update the tree.
Query: Retrieve information (e.g., sum, min, max) over a specified range.
Import Statement: import { SegmentTree } from "collection-kit";

🔹DisjointSet
Definition: A DisjointSet (Union-Find) is a data structure that keeps track of a partition of a set into disjoint subsets, supporting union and find operations.

Key Features:

Efficient Union and Find: Supports merging of sets and finding the representative of a set.
Dynamic Size: Can grow as new elements are added.
Common Operations:

Find: Determine the representative of the set containing a specific element.
Union: Merge two sets into a single set.
Connected: Check if two elements belong to the same set.
Import Statement: import { DisjointSet } from "collection-kit";

🔹SkipList
Definition: A SkipList is a probabilistic data structure that allows for fast search, insertion, and deletion operations, using multiple layers of linked lists.

Key Features:

Probabilistic Balancing: Achieves balance through randomization, allowing for efficient operations.
Dynamic Size: Can grow and shrink as elements are added or removed.
Common Operations:

Insert: Add a new element to the skip list.
Remove: Delete an element from the skip list.
Search: Check if an element exists in the skip list.
Import Statement: import { SkipList } from "collection-kit";

🔹AVLTree
Definition: An AVLTree is a self-balancing binary search tree where the difference in heights between left and right subtrees is at most one, ensuring O(log n) time complexity for search, insertion, and deletion operations.

Key Features:

Self-Balancing: Automatically maintains balance after insertions and deletions.
Binary Search Tree Properties: Follows the properties of binary search trees.
Common Operations:

Insert: Add a new element while maintaining balance.
Remove: Delete an element while maintaining balance.
Search: Retrieve an element from the tree.
Import Statement: import { AVLTree } from "collection-kit";

🔹RedBlackTree
Definition: A RedBlackTree is a balanced binary search tree with an additional property that ensures the tree remains balanced during insertions and deletions, providing O(log n) time complexity for these operations.

Key Features:

Color Properties: Each node is colored red or black, ensuring balance.
Binary Search Tree Properties: Follows the properties of binary search trees.
Common Operations:

Insert: Add a new element while maintaining balance.
Remove: Delete an element while maintaining balance.
Search: Retrieve an element from the tree.
Import Statement: import { RedBlackTree } from "collection-kit";

🔹BTree
Definition: A BTree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.

Key Features:

Multi-way Tree: Can have multiple children per node, allowing for efficient storage.
Balanced Structure: Ensures that all leaf nodes are at the same depth.
Common Operations:

Insert: Add a new element while maintaining balance.
Remove: Delete an element while maintaining balance.
Search: Retrieve an element from the tree.
Import Statement: import { BTree } from "collection-kit";

🔹FenwickTree
Definition: A FenwickTree, also known as a Binary Indexed Tree, is a data structure that provides efficient methods for cumulative frequency tables, allowing for quick updates and prefix sum queries.

Key Features:

Efficient Updates: Supports O(log n) time complexity for updates.
Prefix Sum Queries: Allows for O(log n) time complexity for querying prefix sums.
Common Operations:

Update: Modify an element in the array and update the tree.
Query: Retrieve the prefix sum up to a specified index.
Import Statement: import { FenwickTree } from "collection-kit";

🔹FibonacciHeap
Definition: A FibonacciHeap is a heap data structure that allows for efficient merging of heaps and supports decrease-key operations in O(1) amortized time.

Key Features:

Amortized Efficiency: Provides efficient operations through lazy merging.
Multiple Trees: Can consist of multiple trees, allowing for flexible structure.
Common Operations:

Insert: Add a new element to the heap.
FindMin: Retrieve the minimum element without removing it.
DeleteMin: Remove and return the minimum element.
DecreaseKey: Decrease the value of a key.
Import Statement: import { FibonacciHeap } from "collection-kit";

🔹PairingHeap
Definition: A PairingHeap is a type of heap that allows for efficient merging and decrease-key operations, providing good performance for priority queue implementations.

Key Features:

Simple Structure: Easy to implement and understand.
Amortized Efficiency: Provides efficient operations through a simple merging process.
Common Operations:

Insert: Add a new element to the heap.
FindMin: Retrieve the minimum element without removing it.
DeleteMin: Remove and return the minimum element.
DecreaseKey: Decrease the value of a key.
Import Statement: import { PairingHeap } from "collection-kit";

🔹SuffixTree
Definition: A SuffixTree is a compressed trie containing all the suffixes of a given string, allowing for fast substring queries and pattern matching.

Key Features:

Efficient Substring Queries: Allows for quick searches of substrings.
Space Optimization: Compresses common prefixes to save space.
Common Operations:

Insert: Add a new string to the suffix tree.
Search: Check if a substring exists in the tree.
Delete: Remove a substring from the tree.
Import Statement: import { SuffixTree } from "collection-kit";

🔹BloomFilter
Definition: A BloomFilter is a space-efficient probabilistic data structure used to test whether an element is a member of a set, allowing for false positives but no false negatives.

Key Features:

Space Efficiency: Uses multiple hash functions to minimize space usage.
Probabilistic Membership: Can indicate that an element is possibly in the set or definitely not in the set.
Common Operations:

Add: Insert an element into the Bloom filter.
Contains: Check if an element is possibly in the set.
Import Statement: import { BloomFilter } from "collection-kit";

🔹KDTree
Definition: A KDTree (k-dimensional tree) is a binary tree used for organizing points in a k-dimensional space, allowing for efficient range searches and nearest neighbor searches.

Key Features:

Multi-Dimensional: Supports points in multiple dimensions.
Efficient Searches: Allows for quick range and nearest neighbor queries.
Common Operations:

Insert: Add a new point to the KDTree.
Search: Retrieve points within a specified range.
NearestNeighbor: Find the closest point to a given point.
Import Statement: import { KDTree } from "collection-kit";

🔹QuadTree
Definition: A QuadTree is a tree data structure that partitions a two-dimensional space into four quadrants or regions, allowing for efficient spatial indexing and querying.

Key Features:

Spatial Partitioning: Divides space into quadrants for efficient storage and retrieval.
Dynamic Size: Can grow and shrink as elements are added or removed.
Common Operations:

Insert: Add a new point to the QuadTree.
Search: Retrieve points within a specified region.
Remove: Delete a point from the QuadTree.
Import Statement: import { QuadTree } from "collection-kit";

🔹SplayTree
Definition: A SplayTree is a self-adjusting binary search tree that moves frequently accessed elements closer to the root. This self-adjusting property allows for efficient access to recently accessed elements, making it particularly useful for scenarios where certain elements are accessed more frequently than others.

Key Features:

Self-Adjusting: After every access (search, insert, or delete), the accessed node is moved to the root of the tree, improving access times for frequently used elements.
Amortized Efficiency: Provides O(log n) amortized time complexity for search, insertion, and deletion operations, even though individual operations can take O(n) time in the worst case.
No Extra Storage: Unlike other balanced trees, SplayTrees do not require additional storage for balancing information.
Common Operations:

Splay: Move a specific node to the root of the tree through a series of tree rotations.
Insert: Add a new element to the tree and splay it to the root.
Remove: Delete an element from the tree and splay the last accessed node to the root.
Search: Retrieve an element from the tree and splay it to the root.
Import Statement: import { SplayTree } from "collection-kit";

🔹Treap
Definition: A Treap is a combination of a binary search tree and a heap, maintaining both properties. Each node has a key and a priority, and the tree is organized such that the binary search tree property is maintained based on keys, while the heap property is maintained based on priorities.

Key Features:

Randomized Structure: The priorities are assigned randomly, which helps maintain balance.
Efficient Operations: Provides O(log n) expected time complexity for search, insertion, and deletion operations.
Common Operations:

Insert: Add a new element while maintaining both the binary search tree and heap properties.
Remove: Delete an element while maintaining the properties.
Search: Retrieve an element from the tree.
Import Statement: import { Treap } from "collection-kit";

🔹RadixTree
Definition: A RadixTree (or Patricia Trie) is a space-optimized trie that allows for efficient retrieval of keys by compressing common prefixes. It is particularly useful for storing strings and performing prefix searches.

Key Features:

Space Efficiency: Reduces the number of nodes by merging nodes that share common prefixes.
Fast Search: Allows for quick lookups, insertions, and deletions.
Common Operations:

Insert: Add a new string to the RadixTree.
Search: Check if a string exists in the tree.
Delete: Remove a string from the tree.
Import Statement: import { RadixTree } from "collection-kit";

🔹VanEmdeBoasTree
Definition: A VanEmdeBoasTree is a tree data structure that supports fast operations on integers within a bounded universe. It provides O(1) time complexity for operations like insert, delete, and member queries, making it very efficient for certain applications.

Key Features:

Fast Operations: Supports O(1) time complexity for basic operations.
Bounded Universe: Works efficiently for integers within a specific range.
Common Operations:

Insert: Add an integer to the tree.
Delete: Remove an integer from the tree.
Member: Check if an integer is present in the tree.
Successor: Find the smallest integer greater than a given integer.
Import Statement: import { VanEmdeBoasTree } from "collection-kit";

🔹AhoCorasick
Definition: The Aho-Corasick algorithm is used for matching a set of strings in linear time. It builds a finite state machine that allows for efficient searching of multiple patterns simultaneously.

Key Features:

Multi-Pattern Matching: Can search for multiple patterns in a single pass through the text.
Linear Time Complexity: Provides O(n + m + z) time complexity, where n is the length of the text, m is the total length of the patterns, and z is the number of matches.
Common Operations:

Build: Construct the Aho-Corasick automaton from a set of patterns.
Search: Search for patterns in a given text.
Import Statement: import { AhoCorasick } from "collection-kit";

🔹CountMinSketch
Definition: A CountMinSketch is a probabilistic data structure used for frequency estimation of events in a stream. It provides approximate counts of elements with a small memory footprint.

Key Features:

Space Efficiency: Uses a fixed amount of space to estimate frequencies.
Probabilistic Results: Can return approximate counts with a known error margin.
Common Operations:

Add: Increment the count for a specific element.
Estimate: Retrieve the estimated count for an element.
Import Statement: import { CountMinSketch } from "collection-kit";

🔹TernarySearchTree
Definition: A TernarySearchTree is a trie-like data structure that allows for efficient retrieval of strings. Each node has three children, representing less than, equal to, and greater than the current character.

Key Features:

Efficient String Storage: Allows for efficient prefix searches and string retrieval.
Space Optimization: Uses less space compared to traditional tries.
Common Operations:

Insert: Add a new string to the TernarySearchTree.
Search: Check if a string exists in the tree.
Delete: Remove a string from the tree.
Import Statement: import { TernarySearchTree } from "collection-kit";

🔹IntervalTree
Definition: An IntervalTree is a tree structure that stores intervals and allows for efficient querying of overlapping intervals. It is useful for applications that require range queries.

Key Features:

Efficient Range Queries: Supports querying for all intervals that overlap with a given interval.
Dynamic Size: Can grow and shrink as intervals are added or removed.
Common Operations:

Insert: Add a new interval to the tree.
Remove: Delete an interval from the tree.
Query: Retrieve all intervals that overlap with a given interval.
Import Statement: import { IntervalTree } from "collection-kit";

🔹Rope
Definition: A Rope is a binary tree used to store and manipulate long strings efficiently. It allows for fast concatenation and substring operations.

Key Features:

Efficient String Manipulation: Supports fast operations on long strings.
Dynamic Structure: Can grow and shrink as strings are modified.
Common Operations:

Insert: Add a substring to the rope.
Delete: Remove a substring from the rope.
Substring: Retrieve a substring from the rope.
Import Statement: import { Rope } from "collection-kit";

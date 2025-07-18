// Set.js - Custom Set implementation using HashMap internally
import { HashMap } from "./HashMap.js";

export class Set {
  constructor() {
    this.map = new HashMap();
  }

  add(value) {
    this.map.set(value, true);
  }

  has(value) {
    return this.map.has(value);
  }

  delete(value) {
    return this.map.delete(value);
  }

  size() {
    return this.map.size();
  }

  values() {
    return this.map.keys();
  }

  union(otherSet) {
    const result = new Set();
    this.values().forEach((val) => result.add(val));
    otherSet.values().forEach((val) => result.add(val));
    return result;
  }

  intersection(otherSet) {
    const result = new Set();
    this.values().forEach((val) => {
      if (otherSet.has(val)) result.add(val);
    });
    return result;
  }

  difference(otherSet) {
    const result = new Set();
    this.values().forEach((val) => {
      if (!otherSet.has(val)) result.add(val);
    });
    return result;
  }

  isSubsetOf(otherSet) {
    return this.values().every((val) => otherSet.has(val));
  }
}

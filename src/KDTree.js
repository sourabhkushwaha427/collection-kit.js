// KDTree.js
export class KDTreeNode {
  constructor(point, axis = 0) {
    this.point = point;
    this.left = null;
    this.right = null;
    this.axis = axis;
  }
}

export class KDTree {
  constructor(points = [], depth = 0) {
    this.root = this.buildTree(points, depth);
  }

  buildTree(points, depth) {
    if (points.length === 0) return null;
    const axis = depth % points[0].length;
    points.sort((a, b) => a[axis] - b[axis]);
    const median = Math.floor(points.length / 2);
    const node = new KDTreeNode(points[median], axis);
    node.left = this.buildTree(points.slice(0, median), depth + 1);
    node.right = this.buildTree(points.slice(median + 1), depth + 1);
    return node;
  }
}

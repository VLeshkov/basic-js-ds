const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/



class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addInner(this.treeRoot, data)

    function addInner(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addInner(node.left, data);
      } else {
        node.right = addInner(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchInner(this.treeRoot, data);

    function searchInner(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchInner(node.left, data);
      } else {
        return searchInner(node.right, data);
      }
    }
  }

  find(data) {
    return findInner(this.treeRoot, data);

    function findInner(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findInner(node.left, data);
      } else {
        return findInner(node.right, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        } 
        if (!node.left && !node.right) {
          return null;
        }

        // if botw branches exist

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    let currentNode = this.treeRoot;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.treeRoot;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
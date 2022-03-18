const Node = require("./node");

class Tree {
  _root;

  insert(value) {
    const node = new Node(value);
    var current_node = this._root;

    if (this._root == null) {
      this._root = node;
      return;
    }

    while (true) {
      if (value < current_node._value) {
        if (current_node.leftChild == null) {
          current_node.leftChild = node;
          break;
        }
        current_node = current_node.leftChild;
      } else {
        if (current_node.rightChild == null) {
          current_node.rightChild = node;
          break;
        }
        current_node = current_node.rightChild;
      }
    }
  }

  find(value) {
    var current_node = this._root;

    while (current_node != null) {
      if (value < current_node._value) {
        current_node = current_node.leftChild;
      } else if (value > current_node._value) {
        current_node = current_node.rightChild;
      } else {
        return true;
      }
    }

    return false;
  }
}

module.exports = Tree;

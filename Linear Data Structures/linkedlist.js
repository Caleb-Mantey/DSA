// Data Structure

class Node {
  _value;
  _next;
  _prev;

  constructor(value) {
    this._value = value;
  }

  setNextNode(node) {
    this._next = node;
  }

  setPrevNode(node) {
    this._prev = node;
  }
}

class LinkedList {
  _first_node;
  _last_node;
  _count = 0;

  push(value) {
    // DRY - Donot Repeat Yourself
    let node_item = new Node(value);
    this._count++;
    // Guard Clause
    if (this._first_node == null) {
      // RTL - Right To Left
      return (this._first_node = this._last_node = node_item);
    }

    let last_node = this._last_node;
    this._last_node.setNextNode(node_item);

    this._last_node = node_item;

    this._last_node._prev = last_node;
  }

  getElement(index) {
    let found_node = this.findItem(index);

    if (found_node == null)
      return this.errorHandler("Index not found in the LinkedList");

    return found_node._value;
  }

  // SRP - Single Responsibility Principle
  findItem(index) {
    let node_item = this._first_node;
    for (let i = 0; i < this._count; i++) {
      if (i == index) return node_item;

      node_item = node_item._next;
    }

    return null;
  }

  // t -> <- a -> <- b ->  <- c
  // t -> <- b  ->  <- c

  removeItem(index) {
    let found_item = this.findItem(index);
    this._count--;

    if (found_item == null)
      return this.errorHandler("Sorry array index out of range");

    if (found_item == this._first_node) {
      if (this._first_node == this._last_node)
        return (this._first_node = this._last_node = null);

      this._first_node = this._first_node._next;
      this._first_node._prev = null;
      return;
    }

    if (found_item == this._last_node) {
      this._last_node = this._last_node._prev;
      this._last_node._next = null;
    }

    let prev_node = found_item._prev;
    let next_node = found_item._next;

    prev_node._next = next_node;
    next_node._prev = prev_node;
  }

  errorHandler(errorStatement) {
    throw errorStatement;
  }

  setElement(index, value) {
    let found_item = this.findItem(index);

    if (found_item == null)
      return this.errorHandler("Sorry Index out of range");

    found_item._value = value;
  }

  getFirst() {
    return this._first_node._value;
  }

  getLast() {
    return this._last_node._value;
  }

  removeLast() {
    // O(n)
  }

  removeFirst() {}
}

myLinkedList = new LinkedList();
myLinkedList.push(5);
myLinkedList.push(3);
myLinkedList.push(9);
myLinkedList.removeItem(1);
myLinkedList.removeItem(0);
myLinkedList.removeItem(0);

// myLinkedList.setElement(1, 6);
console.log(myLinkedList);
// console.log(myLinkedList.getElement(0));
// console.log(myLinkedList.getElement(1));
// console.log(myLinkedList.getElement(2));
// console.log(myLinkedList.getElement(3)); // throw exception
// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());

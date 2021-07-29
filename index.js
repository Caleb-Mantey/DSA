const SLinkedList = require('./LinkedList/singly_linked_list');
const DLinkedList = require('./LinkedList/doubly_linked_list');
const Stack = require('./LinkedList/stack');
const Queue = require('./LinkedList/queue');

// sLinkedList = new SLinkedList()
// sLinkedList.push(10)
// sLinkedList.push(20)
// sLinkedList.push(30)
// console.log(sLinkedList.getItem(1))
// console.log(sLinkedList.toArray())

// dLinkedList = new DLinkedList()

// dLinkedList.push(10)
// dLinkedList.push(40)
// dLinkedList.push(30)
// dLinkedList.push(40)
// dLinkedList.push(90)

// console.log(dLinkedList.first)
// console.log(dLinkedList.lastIndexOf(40))
// console.log(dLinkedList.toArray())

// myStack = new Stack()
// myStack.push(1)
// myStack.push(2)
// myStack.push(3)

// console.log(myStack.peek())
// console.log(myStack.show())
// console.log(myStack.toArray())
// console.log(myStack.reverse())

myQueue = new Queue()
myQueue.enqueue({name: "ama", age: 21})
myQueue.enqueue({name: "yaw", age: 26})
myQueue.enqueue({name: "yaa", age: 16})
myQueue.enqueue({name: "Kofi", age: 18})

myQueue.dequeue()
console.log(myQueue.peek())
myQueue.reverse()
console.log(myQueue.peek())
// console.log(myQueue.show())
// console.log(myQueue.toArray())


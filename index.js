const SLinkedList = require('./LinkedList/singly_linked_list');
const DLinkedList = require('./LinkedList/doubly_linked_list');
const Stack = require('./LinkedList/stack');
const Queue = require('./LinkedList/queue');
// sLinkedList = new SLinkedList()
// sLinkedList.push(10)
// sLinkedList.push(20)
// sLinkedList.push(30)
// console.log(sLinkedList.getItem(1))

// dLinkedList = new DLinkedList()

// dLinkedList.push(10)
// dLinkedList.push(40)
// dLinkedList.push(30)
// dLinkedList.push(40)
// dLinkedList.push(90)

// console.log(dLinkedList.first)
// console.log(dLinkedList.lastIndexOf(40))

// myStack = new Stack()
// myStack.push("hello")
// myStack.push("hey")
// myStack.push("hi")

// console.log(myStack.peek())
// console.log(myStack.show())

myQueue = new Queue()
myQueue.enqueue({name: "ama", age: 21})
myQueue.enqueue({name: "yaw", age: 26})
myQueue.enqueue({name: "yaa", age: 16})
myQueue.enqueue({name: "Kofi", age: 18})
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.peek())
console.log(myQueue.show())
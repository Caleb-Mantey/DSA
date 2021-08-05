const SLinkedList = require('./LinkedList/singly_linked_list');
const DLinkedList = require('./LinkedList/doubly_linked_list');
const Stack = require('./LinkedList/stack');
const Queue = require('./LinkedList/queue');
const QueueWithTwoStacks = require('./Queues/queues_with_two_stacks');
const QueuesWithArrays = require('./Queues/queues_with_array');
const CircularArray = require('./Arrays/circular_arrays')
sLinkedList = new SLinkedList()
sLinkedList.push(10)
sLinkedList.push(20)
sLinkedList.push(30)
sLinkedList.removeItem(1)
console.log(sLinkedList.getItem(1))
console.log(sLinkedList.toArray())
console.log(sLinkedList)
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

// myQueue = new Queue()
// myQueue.enqueue({name: "ama", age: 21})
// myQueue.enqueue({name: "yaw", age: 26})
// myQueue.enqueue({name: "yaa", age: 16})
// myQueue.enqueue({name: "Kofi", age: 18})

// myQueue.dequeue()
// console.log(myQueue.peek())
// myQueue.reverse()
// console.log(myQueue.peek())
// console.log(myQueue.show())
// console.log(myQueue.toArray())

// queue = new QueueWithTwoStacks()
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(9);
// console.log(queue)
// console.log(queue.dequeue())
// console.log(queue)


// queueArrays = new QueuesWithArrays(5)
// queueArrays.enqueue(1)
// queueArrays.enqueue(2)
// queueArrays.enqueue(3)
// queueArrays.enqueue(4)
// queueArrays.enqueue(5)
// queueArrays.dequeue()
// queueArrays.dequeue()

// console.log(queueArrays)


// cArray = new CircularArray(5)
// cArray.push(1)
// cArray.push(2)
// cArray.push(3)
// cArray.push(4)
// cArray.push(5)
// cArray.pop()
// cArray.pop()
// cArray.pop()

// console.log(cArray);


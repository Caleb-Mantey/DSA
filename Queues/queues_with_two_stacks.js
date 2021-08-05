const Stack = require('../LinkedList/stack');


function QueueWithTwoStacks(params) {

    this.stack1 = new Stack()
    this.stack2 = new Stack()

    let moveStackToFormQueue = () => {
        if(this.stack2.isEmpty())
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop())
            }
    }

    this.enqueue = (item) => {
        this.stack1.push(item)
    }

    this.dequeue = () => {     
        if(this.isEmpty())
            throw "Can't DeQueue an empty Queue"

        moveStackToFormQueue()

        return this.stack2.pop()
    }

    this.peek = () => {

        if(this.isEmpty())
            return null

        moveStackToFormQueue()
        
        return this.stack2.peek();
    }

    this.isEmpty = () => (
        (this.stack1.isEmpty() && this.stack2.isEmpty())
    )
    
}

module.exports = QueueWithTwoStacks
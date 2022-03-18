function Queue() {
    let first, last = null
    this.size = 0

    function Node(Value) {
        this.value = Value
        this.next = null
    }

    this.enqueue = (item) => {

        let newItem = new Node(item)

        if(isEmpty())
            first = last = newItem
        else{
            last.next = newItem
            last = newItem
        }

        this.size++
    }

    this.dequeue = () => {
        if(isEmpty())
            throw "Can't DeQueue an Empty List"
        
        let item_to_dequeue = first.value

        if(first == last)
            first = last = null
        else{
            let new_first = first.next
            first = new_first
        }

        this.size--

        return item_to_dequeue
    }

    this.reverse = () => {
        if(isEmpty())
            throw "Can't Reverse an Empty List"
        
        let customArray = new Array(this.size)
        for (let index = 0; index < customArray.length; index++) {
            customArray[index] = this.dequeue();
        }

        for (let index = (customArray.length - 1); index >= 0; index--) {
            this.enqueue(customArray[index])
        }
    }
    //   <- <- <- <-
    // [1  2  3  4  5]
    //   -> -> -> ->

    this.toArray = () => {
        let customArray = []

        let node_item = first

        for (let index = 0; index < this.size; index++) {
            customArray.push(node_item.value)
            node_item = node_item.next
        }

        return customArray
    }

    this.peek = () => {
        if(isEmpty()) return null

        return first.value
    }

    this.show = () => (
        first
    )

    let isEmpty = () => (
        (first == null && last == null)
    )
}

module.exports = Queue
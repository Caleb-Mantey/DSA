function Queue() {
    let first, last = null

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
    }

    this.dequeue = () => {
        if(isEmpty())
            throw "Can't DeQueue an Empty List"
        
        if(first == last)
            first = last = null
        else{
            let new_first = first.next
            first = new_first
        }
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
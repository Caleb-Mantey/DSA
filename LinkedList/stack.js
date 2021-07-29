function StackedLinkedList() {
    let first, last = null
    this.size = 0

    function Node(Value) {
        this.value = Value
        this.next = null
        this.prev = null
    }

    this.push = (item) => {

        let newItem = new Node(item)

        if(isEmpty())
        {
            first = last = newItem
        }else{
            newItem.prev = last
            newItem.next = first

            last.next = newItem
            last = newItem

            first.prev = last
        }

        this.size++
    }

    this.pop = () => {
        if(isEmpty())
            throw "Can't pop an empty list"
        
        if(first == last)
            first = last = null
        else{
            let prev = last.prev
            prev.next = first
            last = prev
            first.prev = last
        }

        this.size--
    }

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
        if(isEmpty())
            return null

        return last.value
    }

    this.show = () => (
        first
    )

    let isEmpty = () => (
        (first == null && last == null)
    )
}

module.exports = StackedLinkedList
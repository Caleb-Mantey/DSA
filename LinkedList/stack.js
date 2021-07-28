function StackedLinkedList() {
    let first = null
    let last = null

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
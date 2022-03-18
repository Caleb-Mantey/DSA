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

        if(empty())
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
        if(empty())
            throw "Can't pop an empty list"
        
        let item_to_pop = last.value

        if(first == last)
            first = last = null
        else{
            let prev = last.prev
            prev.next = first
            last = prev
            first.prev = last
        }

        this.size--

        return item_to_pop
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

    this.reverse = () => {
        let customArray = new Array(this.size)

        for (let index = 0; index < customArray.length; index++) {
            customArray[index] = this.pop()
        }

        for (let index = 0; index < customArray.length; index++) {
            this.push(customArray[index])
        }
    }

    this.peek = () => {
        if(empty())
            return null

        return last.value
    }

    this.show = () => (
        first
    )

    let empty = () => (
        (first == null && last == null)
    )

    this.isEmpty = () => {
        return empty();
    }
}

module.exports = StackedLinkedList
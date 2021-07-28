function DLinkedList() {
    this.first = null;
    this.last = null;
    this.size = 0;

    function  Node(Value) {
        this.value = Value;
        this.next = null;
        this.prev = null;
    }


    this.push = (item) => {
        let node_item = new Node(item)

        if(this.first == null){
            this.first = node_item
            this.last = node_item
        }else{
            this.last.next = node_item
            node_item.prev = this.last
            this.last = node_item
            this.last.next = this.first
            this.first.prev = this.last
        }

        this.size++
    }

    this.getFirstItem = () => (
        this.first.value
    )

    this.getLastItem = () => (
        this.last.value
    )

    this.getItem = (Index) => {
        if(this.isEmpty())
            null

        let node_item = this.first

        for (let index = 0; index < this.size; index++) {
            if(Index == index)
                return node_item.value
            
            node_item = node_item.next
        }

        return null
    }

    this.dequeue = () => {
        if(this.isEmpty())
            throw "Empty List Item"
        
        let first_item = this.first
        
        if(this.first == this.last)
            this.first = this.last = null
        else{
            this.first = this.first.next
            this.first.prev = this.last
        }

        this.size--
        return first_item
    }

    this.pop = () => {
        if(this.isEmpty())
            throw "Empty List Item"
        
        let last_item = this.last

        if(this.first == this.last)
            this.first = this.last = null
        else{
            this.last = this.last.prev 
            this.last.next = this.first
        }

        this.size--
        return last_item
    }

    this.indexOf = (item) => {
        if(this.isEmpty())
            null

        let node_item = this.first

        for (let index = 0; index < this.size; index++) {
            if(node_item.value == item)
                return index

            node_item = node_item.next
        }

        return -1
    }

    // this.lastIndexOf = (item) => {
    //     if(this.isEmpty())
    //         throw "Empty List Item"

    //     let node_item = this.first
    //     let index_of_item = -1

    //     for (let index = 0; index < this.size; index++) {
    //         if(node_item.value == item)
    //             index_of_item = index

    //         node_item = node_item.next
    //     }

    //     return index_of_item
    // }

    // Better Approach - but likely to be slow depending on the position of the last ocurence of an element
    this.lastIndexOf = (item) => {
        if(this.isEmpty())
            null

        let node_item = this.last

        for (let index = (this.size - 1); index > 0; index--) {
            if(node_item.value == item)
                return index

            node_item = node_item.prev
        }

        return -1
    }

    this.peekFirst = () => (
        this.first.value
    )
    
    this.peekLast = () => (
        this.last.value
    )

    this.isEmpty = () => (
        (this.first == null && this.last == null)
    )
}


module.exports = DLinkedList
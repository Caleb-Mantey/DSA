
function SLinkedList (){
    this.first = null;
    this.last = null;
    this.size = 0;
    
    function Node(Value){
        this.value = Value;
        this.next = null;
    }

    this.push = (item) => {
        let node_item = new Node(item);
        if(this.first == null){
            this.first = node_item;
            this.last = node_item;
        }else{
            this.last.next = node_item;
            this.last = node_item;
        }
        this.size++
    }

    this.removeFirstItem = () => {
        if(this.isEmpty())
            throw "EMpty Linked List"
        
        let first_item = this.first

        if(this.first === this.last)
            this.first = this.last = null;
        else{
            let next_node_item = this.first.next
            this.first = next_node_item
        }

        this.size--
        return first_item
    }

    this.removeLastItem = () => {
        let node_item = this.first
        let last_item = this.last

        if(this.isEmpty())
            throw "EMpty Linked List"

        if(this.first === this.last)
             this.first = this.last = null
        else{
            while (node_item.next != this.last) {
                node_item = node_item.next
            }
            this.last = node_item
            node_item.next = null
        }  

        this.size--
        return last_item
    }

    this.getFirstItem = () => (
         this.first.value
    )

    this.getLastItem = () => (
        this.last.value
    )

    this.getItem = (Index) => {
        if(this.isEmpty())
            return null

        let node_item = this.first

        for (let index = 0; index < this.size; index++) {            
            if(Index == index)
                return node_item.value;
    
            node_item = node_item.next
        }

        return null
    }

    this.contains = (item) => {
        if(this.isEmpty())
            throw "EMpty Linked List"
            
        let node_item = this.first

        while (node_item.next != null ) {
            if(node_item.value == item)
                return true

            node_item = node_item.next
        }

        return false
    }

    this.indexOf = (item) => {
        if(this.isEmpty())
            throw "EMpty Linked List"

        let node_item = this.first

        for (let index = 0; index < this.size; index++) {            
            if(node_item.value == item)
                return index;
    
            node_item = node_item.next
        }

        return -1;
    }

    this.isEmpty = () => {
        return (this.first == null && this.last == null)
    }
}

module.exports = SLinkedList
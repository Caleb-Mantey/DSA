
function CircularArray(arraySize) {
    this.items = new Array(arraySize)
    this.count = 0
    let front = 0
    let back = 0


    this.push = (item) => {
        // if(this.isEmpty())
        
        if(this.isFull())
            throw "Array is full cannot add additional items"
        
        this.items[back] = item 
        back = (back + 1) % arraySize
        this.count++
    }

    this.pop = () => {
        if(this.isEmpty())
            throw "Cannot pop an empty list"

            
        item_to_pop = this.items[back]
        this.items[back] = 0
        this.count--

        return item_to_pop
    }

    // this.enqueue = (item) => {
    //     if(this.isFull())
    //         throw "Array is full cannot add additional items"

    //     this.items[front] = item
    // }

    

    this.dequeue = () => {
        if(this.isEmpty())
            throw "Cannot enqueue an empty list"

        
        item_to_pop = this.items[front]

        this.items[front] = 0
        front = (front + 1) % arraySize

        return item_to_pop
    }

    this.isFull = () => {
        return (this.count == this.items.length)
    }

    this.isEmpty = () => {
        return (this.count == 0)
    }
    
}

module.exports = CircularArray
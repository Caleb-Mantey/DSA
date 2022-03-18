
function QueuesWithArrays(arraySize) {
    this.items = new Array(arraySize)
    let front = 0
    this.count = 0

    this.dequeue = () => {

        if(this.count == 0){
            front = 0
            return null
        }

        front_item = this.items[front]
        this.items[front++] = 0
        this.count--

        return front_item
    }

    this.enqueue = (item) => {
        if(this.isFull())
            throw "Queue Is Full"

        this.items[this.count++] = item
    }

    this.isFull = () => {
        return (this.count == this.items.length)
    }
}



module.exports = QueuesWithArrays

class LinkedList  {
    constructor (value, list, head = null, tail = null) {
        this.value = value
        this.list = []
        this.head = head
    }

    append(value) {
        const node = new Nodes(value, null)
        for (let n = 0; n < this.list.length; n++) {
            if (this.list[n].nextNode === null) {
                this.list[n].nextNode = value
            }
        }
        this.list.push(node)
        if (this.head === null) {
            this.head = value
        }
    }

    prepend(value) {
        const node = new Nodes(value, this.head)
        this.list.push(node)
        this.head = value
    }

    size() {
        return this.list.length
    }
}

class Nodes {
    constructor (value = null, nextNode = null, list) {
        this.value = value
        this.nextNode = nextNode
    }
}

const n2 = new Nodes (2, 8)
const n8 = new Nodes (8, 3)
const n3 = new Nodes (3, 14)
const n14 = new Nodes (14, null)

const myLinkedList = new LinkedList
myLinkedList.append(9)
myLinkedList.append(9)
myLinkedList.prepend(10)
myLinkedList.prepend(11)


console.log(n8)
console.log(myLinkedList)
console.log(myLinkedList.size())
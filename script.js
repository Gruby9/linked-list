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
        this.list.unshift(node)
        this.head = value
    }

    size() {
        return this.list.length
    }

    showHead() {
        return this.head
    }

    showTail() {
        for (let n = 0; n < this.list.length; n++) {
            if (this.list[n].nextNode === null) {
                return this.list[n].value
            }
        }
    }

    at(index) {
        return this.list[index - 1].value
    }

    contains(value) {
        for (let n = 0; n < this.list.length; n++) {
            if (this.list[n].value == value) return n
        }
        return 'Does not contain'
    }

    toString() {
        let theString = ' '
        for (let n = 0; n < this.list.length; n++) {
            if (this.list[n].nextNode == null) {
                theString += `(${this.list[n].value})`
            } else {
                theString += `(${this.list[n].value}) -> `
            }
        }
        return theString
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
myLinkedList.prepend(50)
myLinkedList.append(5)



console.log(n8)
console.log(myLinkedList)
console.log(myLinkedList.size())
console.log(myLinkedList.showHead())
console.log(myLinkedList.showTail())
console.log(myLinkedList.at(5))
console.log(myLinkedList.contains(515))
console.log(myLinkedList.toString())


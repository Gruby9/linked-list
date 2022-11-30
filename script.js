class LinkedList {
    constructor (value) {
        this.value = value
    }
}

class Nodes {
    constructor (value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }

    append(value) {
        const node = new Nodes(value)
        const child = new LinkedList(value)
    }

    prepend(value) {
        const node = new Nodes(value)

    }
}

Nodes.append(2)
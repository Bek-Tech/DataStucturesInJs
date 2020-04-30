class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        console.log(newNode)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }
    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        let node = this.head
        for (let i = 0; i < index - 1; i++) {
            node = node.next
        }
        let aft = node.next
        newNode.next = aft
        node.next = newNode


        return this.printList();
    }
    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
    reverse() {

        let reversed = new LinkedList()
        this.tail = { ... this.head, next: null }
        let node = this.head
        for (let i = 0; i < this.length; i++) {
            reversed.prepend(node.value)
            node = node.next
        }

        this.head = reversed.head
    }

}
// Test
let myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList()
myLinkedList.remove(2)
myLinkedList.reverse()
console.log(myLinkedList)
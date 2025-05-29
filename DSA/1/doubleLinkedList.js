class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Index out of bounds");
            return;
        }

        const node = new Node(value);

        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.size) {
            this.append(value);
            return;
        }

        let curr = this.head;
        let currentIndex = 0;

        while (curr && currentIndex < index) {
            curr = curr.next;
            currentIndex++;
        }

        node.prev = curr.prev;
        node.next = curr;
        if (curr.prev) curr.prev.next = node;
        curr.prev = node;

        this.size++;
    }

    deleteByIndex(index) {
        if (index < 0 || index >= this.size || !this.head) {
            console.log("Index out of bounds or list is empty");
            return;
        }

        if (index === 0) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.size--;
            return;
        }

        let curr = this.head;
        let currentIndex = 0;

        while (curr && currentIndex < index) {
            curr = curr.next;
            currentIndex++;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
            this.tail.next = null;
        } else {
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
        }

        this.size--;
    }

    deleteByValue(value) {
        if (!this.head) return;

        let curr = this.head;

        if (curr.value === value) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                if (this.head) this.head.prev = null;
            }
            this.size--;
            return;
        }

        while (curr && curr.value !== value) {
            curr = curr.next;
        }

        if (!curr) {
            console.log("Value not found");
            return;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
            this.tail.next = null;
        } else {
            curr.prev.next = curr.next;
            if (curr.next) {
                curr.next.prev = curr.prev;
            }
        }

        this.size--;
    }

    reverse() {
        let curr = this.head;
        let temp = null;

        while (curr) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }

        if (temp) {
            this.tail = this.head;
            this.head = temp.prev;
        }
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    search(value) {
        let curr = this.head;
        let index = 0;

        while (curr) {
            if (curr.value === value) return index;
            curr = curr.next;
            index++;
        }

        return -1;
    }

    removeDuplicates() {
        if (!this.head) return;

        let curr = this.head;
        let seen = new Set();

        while (curr) {
            if (seen.has(curr.value)) {
                let next = curr.next;
                if (curr === this.tail) {
                    this.tail = curr.prev;
                    this.tail.next = null;
                } else {
                    curr.prev.next = curr.next;
                    if (curr.next) {
                        curr.next.prev = curr.prev;
                    }
                }
                this.size--;
                curr = next;
            } else {
                seen.add(curr.value);
                curr = curr.next;
            }
        }
    }

    print() {
        let curr = this.head;
        const values = [];
        while (curr) {
            values.push(curr.value);
            curr = curr.next;
        }
        console.log(values.join(" <-> "));
    }
}

const dll = new DoubleLinkedList();
dll.prepend(10);
dll.prepend(20);
dll.append(30);
dll.append(40);
dll.insert(50, 2);
dll.insert(60, 3);
dll.print();

dll.deleteByIndex(2);
console.log('After deleting by index:');
dll.print();

dll.deleteByValue(60);
console.log('After deleting by value:');
dll.print();

dll.reverse();
console.log('After reversing:');
dll.print();

const middle = dll.findMiddle();
console.log(`Middle element is: ${middle ? middle.value : "None"}`);

const index = dll.search(40);
console.log(index !== -1 ? `Value found at index ${index}` : "Value not found");

dll.append(10);
console.log('After adding duplicate')
dll.print()
dll.removeDuplicates();
console.log('After removing duplicates:');
dll.print();

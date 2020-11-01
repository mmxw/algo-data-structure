//implementation of linked list

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  toArrary() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.prepend('there,')
linkedList1.prepend('hello')
linkedList1.append('this');
linkedList1.append('is');
linkedList1.append('a');
linkedList1.append('linked');
linkedList1.append('list');

console.log(linkedList1.toArrary());

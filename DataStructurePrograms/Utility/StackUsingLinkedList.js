const ll = require('./LinkedListUtility');
const linkedlist = new ll.LinkedListNode();



class StackNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList{
    StackLinkedList(){
        this.top = null;
        this.size = 0;
    }

    pushElement(element){
        linkedlist.addElement(element);
    }

    popElement(){
        return linkedlist.delAtEnd();
    }
}


module.exports = {
    StackLinkedList
}
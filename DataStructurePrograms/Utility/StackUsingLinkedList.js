

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
    
    }

    popElement(){
        if(this.top == null){
            return 'Stack is Empty'
        }
    }
}
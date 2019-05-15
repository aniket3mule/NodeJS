/**
 * Purpose     : Stack operations like Push, Pop
 * 
 * @file       : StackUtility.js
 * @overview   : Stack operations like Push, Pop
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
 * 
 */


class Stack{
    constructor(){
        this.item = [];
    }

    
pushItem(element){
    this.item.push(element);
}


popItem(){
    if(this.isEmpty()){
        return 'Stack is empty: ';
    }
    return this.item.pop()
}

isEmpty(){
    return this.item.length == 0;
}


printStack(){
    
}


}

module.exports = {
    Stack
}
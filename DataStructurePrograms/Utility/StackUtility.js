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
        this.top = 0
    }

    /********************Stack using collection library************************* */
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


/*************************Stack without using collection librabry***************************** */
pushElement(element){
    this.top++;
    this.item[this.top] = element;
    
}


popElement(){
    if(this.isEmpty()){
        return 'Stack is empty: ';
    }
    var ele = this.item[this.top];
    this.top--;
    return ele
   
}

isStackeEmpty(){
    return this.top == 0;
}

}

module.exports = {
    Stack
}
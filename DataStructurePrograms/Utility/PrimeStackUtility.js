/**
 * Purpose     : Stack operations like Push, Pop
 * 
 * @file       : PrimeStackUtility.js
 * @overview   : Stack operations like Push, Pop
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 17/05/2019
 * 
 */


class Stack{
    constructor(){
        this.item = [];
        this.top=0
    }

    
pushItem(element){
    this.top++;
    this.item[this.top] = element;
    
}


popItem(){
    if(this.isEmpty()){
        return 'Stack is empty: ';
    }
    var ele = this.item[this.top];
    this.top--;
    return ele
   
}

isEmpty(){
    return this.top == 0;
}


}

module.exports = {
    Stack
}
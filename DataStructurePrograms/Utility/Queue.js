/**
 * Purpose     : Queue Class to enqueue and dequeue people
 * 
 * @file       : Queue.js
 * @overview   : Queue Class to enqueue and dequeue people
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
 * 
 */

 

 class Queue{
     constructor(){
         this.items = [];
         this.front = this.rear = -1;
         this.size =0;
     }
/****************************Queue using collections library******************************* */
     addItem(element){
         this.items.push(element);
     }

     delItem(){
         return this.items.shift();
     }

     isEmpty(){
         return this.items.length==0;
     }

     printQueue(){
         var str = '';
         for (let i = 0; i < this.items.length; i++) {
             str += this.items[i]+' ';
         }
         return str;
     }

     frontEle(){
         if(this.isEmpty()){
             return 'Queue is empty';
         }
         return this.items[0];
     }





     /**************************Queue Without using collection library************************** */

     addElement(element){
         if(this.rear == -1){
             this.items[this.rear++] = element;
             
         }
         this.items[this.rear++] = element;
     }

     print(){
        var str = '';
         for (let i = this.front+1; i < this.items.length; i++) {
            
             str = str + this.items[i] +' '
         }
             
         return str;
     }

     delElement(){
         if (this.isStackEmpty()) {
             return 'Queue is empty'
         }
         
         return this.items[this.front];
     }

     frontElement(){
        if (this.isStackEmpty()) {
            return 'Queue is empty'
        }
        this.front++;
        return this.items[this.front];
     }


     isStackEmpty(){
        return this.front+1 == this.items.length;
    }


 }


 module.exports = {
     Queue
 }
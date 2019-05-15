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
     }

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

     front(){
         if(this.isEmpty()){
             return 'Queue is empty';
         }
         return this.items[0];
     }
 }


 module.exports = {
     Queue
 }
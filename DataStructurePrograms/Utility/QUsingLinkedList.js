/**
 * Purpose     : Queue using Linked List
 * 
 * @file       : QUsingLinkedList.js
 * @overview   : Queue using Linked List
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 17/05/2019
 * 
 */

 class QNode{
     constructor(data){
         this.data = data;
         this.next = null;
     }
 }
 class QLinkedList{
     QLinkedList(){
         this.front = this.rear = null;
     }


     enQueElement(element){
         var newNode = new QNode(element);

         if(this.rear == null){
             this.front = this.rear = newNode;
         }
         this.rear.next = newNode;
         this.rear = newNode;
     }

     deQueElement(){
        var str ;
         while(this.front!=null){
         str = this.front.data;
         this.front = this.front.next;
         return str;
        }
        

     }
 }

 module.exports= {
     QLinkedList
 }
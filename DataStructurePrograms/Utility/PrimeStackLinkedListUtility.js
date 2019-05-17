/**
 * Purpose     : Linked List operations searching, deleting, inserting and displaying
 * 
 * @file       : PrimeStackLinkedList.js
 * @overview   : Linked List operations searching, deleting, inserting and displaying
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 17/05/2019
 * 
 */

 const st = require('./PrimeStackUtility');
 const stack = new st.Stack();

 class Node{
     constructor(data){
         this.data = data;
         this.next = null;
     }
 }


 class LinkedListStack{
     LinkedListStack(){
         this.head = null;
         this.size=0;
     }

     addElement(element){
         var nextNode = new Node(element);
         var current;
         if(this.head==null){
             this.head=nextNode;
         }
         else{
             current =this.head;
             while(current.next!=null){
                 current = current.next;
             }
             current.next=nextNode;
         }
         this.size++;
     }

    

     /**************Displays Elements******************* */

   displayList(){
    var current = this.head;
    var str = [];
    var i=0;

    while(current!=null){
        str[i++] = current.data ;
        current = current.next;
        
    }
    return str;
}

 }

 

 module.exports = {
     LinkedListStack
 }
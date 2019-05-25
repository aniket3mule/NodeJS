/**
 * Purpose     : Linked List operations searching, deleting, inserting and displaying
 * 
 * @file       : LinkedListUtility.js
 * @overview   : Linked List operations searching, deleting, inserting and displaying
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 14/05/2019
 * 
 */
  
  
  //Class Node with constructor  
class Node{
    //Constructor
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
    //Class LinkedListNode
class LinkedListNode{
    
    LinkedListNode(){
        this.head =null;
        this.size = 0;
    
    }

    /**************Adding Elements******************* */
    addElement (element){
        var nextNode = new Node(element);

        if(this.head==null){
            this.head = nextNode;
            
        }
        else{

            while(this.head.next!=null){
                this.head =this.head.next;
            }
            this.head.next = nextNode;
        }
        this.size++;
    }

   /**************Displays Elements******************* */

   displayList(){
       var current = this.head;
       var str = '';

       while(current!=null){
           str = str + current.data + ' ';
           current = current.next;
       }
       return str;
   }

   /**************Search Element******************* */
   
   searchElement(element){
       var current = this.head;
       while(current!=null){
           if(current.data== element){
               return true;
           }
           current = current.next;
       }
       return false;
   }


   /**************Search Element******************* */

   removeElement(search){
       var current = this.head;
       var prev = null;

       while(current!=null){
           if(current.data == search){
               if(prev == null){
                   this.head = current.next;
               }
               else{
                   prev.next = current.next;
               }
               this.size--;
               return current.data;
           }
           prev = current;
           current = current.next;
       }
   }


   /**************Is Empty******************* */

   //It returns true if size is zero
   isEmpty(){
       return this.size==0;
   }

   /**************Delete Last element******************* */

   delAtEnd(){
       if(this.head == null){
           return null;
       }
       if (this.head.next == null) {
           var temp = this.head.data;
           this.head = null
           return temp;
       }
       var sec_last = this.head;

       while(sec_last.next.next !=null){
           sec_last = sec_last.next
       }
       var temp = sec_last.next.data;
       sec_last.next = null;
       return temp;

   }

   
/*****************Adding Elements in Sorting order*******************/
   orderedLinkedList(element){
   
    var newNode = new Node(element);
       if(this.head ==null){
           this.head = newNode;
       }
       else{
           
           if(this.head.next == null){
             
               if(parseInt(this.head.data) > parseInt(newNode.data)){
                   newNode.next = this.head;
                   this.head = newNode;
               }
               else{ 
                   this.head.next =newNode;
               }
           }
           else{
               var p1, p2;
               
               p1 = this.head;
               p2 = p1.next;
            
               while(p1.next!=null){
                   if(parseInt(p1.data) > parseInt(newNode.data) && p1==this.head ){
                       newNode.next = this.head;
                       this.head = newNode;
                   }
                   if (parseInt(p1.data) < parseInt(newNode.data) && parseInt(p2.data) > parseInt(newNode.data)) {
                       newNode.next = p1.next;
                       p1.next = newNode;
                   }
                   if (p2.next == null && parseInt(p2.data) < parseInt(newNode.data )) {
                       p2.next = newNode;
                   }    
                   p1 = p2;
                   p2 = p1.next;
               }
           }
       }
   }
}

module.exports = {
    LinkedListNode
}
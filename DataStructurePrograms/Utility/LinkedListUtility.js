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
        var current;

        if(this.head==null){
            this.head = nextNode;
            
        }
        else{
            current = this.head;

            while(current.next!=null){
                current =current.next;
            }
            current.next = nextNode;
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

   

//    sortList(){
//        var temp ;
//        var p = this.size;
//        temp = this.head;

//        while(p>0){
//         while(temp.next!=null){
//             if(parseInt(temp.data) > parseInt(temp.next.data)){
//                 var t = parseInt(temp.data);
//                 temp.data = parseInt(temp.next.data);
//                 temp.next.data = t;
//             }
//             temp = temp.next;
//            }
//            p--;
//        }
//    }
/*****************Adding Elements in Sorting order*******************/
   orderedLinkedList(element){
   
    var newNode = new Node(element);
       if(this.head ==null){
           this.head = newNode;
       }
       else{
           //var temp = this.head;
          
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
               var nxt, prev;
               
               nxt = this.head;
               prev = nxt.next;
            
               while(nxt.next!=null){
                   if(parseInt(nxt.data) > parseInt(newNode.data) && nxt==this.head ){
                       newNode.next = this.head;
                       this.head = newNode;
                   }
                   if (parseInt(nxt.data) < parseInt(newNode.data) && parseInt(prev.data) > parseInt(newNode.data)) {
                       newNode.next = nxt.next;
                       nxt.next = newNode;
                   }
                   if (prev.next == null && parseInt(prev.data) < parseInt(newNode.data )) {
                       prev.next = newNode;
                   }    
                   nxt = prev;
                   prev = nxt.next;
               }
           }
       }
   }
}


module.exports = {
    LinkedListNode
}

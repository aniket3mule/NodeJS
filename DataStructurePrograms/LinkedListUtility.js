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

            while(current.next){
                current =current.next;
            }
            current.next = nextNode;
        }
        this.size++;
    }


   /**************Displays Elements******************* */

   displayList(){
       var current = this.head;
       var str ='';

       while(current!=null){
           str = str + current.data+'  ';
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












}


module.exports = {
    LinkedListNode
}

/**
 * Purpose     : Create a Ordered Linked List having Numbers in ascending order
 * 
 * @file       : OrderedList.js
 * @overview   : Create a Ordered Linked List having Numbers in ascending order
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 17/05/2019
 * 
 */


 const l = require('./Utility/LinkedListUtility');
 const rl = require('readline-sync');
 const fs = require('fs');
 const list = new l.LinkedListNode();


 var arr=[], words=[], dis=[];

 arr = fs.readFileSync('./DSTest.txt','utf8');
 words = arr.split(' ');

 words.forEach(element => {
     list.orderedLinkedList(element);
     
 });

d = list.displayList();
console.log('Ordered List is : \n'+d);

var search = rl.questionInt('\nEnter a number you want search : \n');

var status = list.searchElement(search);

if (status) {
    list.removeElement(search);
    console.log('\nNumber is found and removed from the list and update list is : \n');
    d = list.displayList();
    console.log('Ordered List is : \n'+d);
    fs.writeFileSync('./DSTest.txt',d.toString());
    console.log('File Updated sucessfully............');
}
else{
    list.orderedLinkedList(search);
    console.log('\nNumber is not found and added to the list and update list is : \n');
    d = list.displayList();
    console.log('Ordered List is : \n'+d);
    fs.writeFileSync('./DSTest.txt',d.toString());
    console.log('File Updated sucessfully............');
}



 

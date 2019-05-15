/**
 * Purpose     : Create a Ordered Linked List having Numbers in ascending order
 * 
 * @file       : OrderedList.js
 * @overview   : Create a Ordered Linked List having Numbers in ascending order
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
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
     list.addElement(element);
     
 });
 list.sortList();
 d = list.displayList();
console.log('Ordered List is : \n'+d);



 

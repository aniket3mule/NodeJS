/**
 * Purpose     : ­Read from file the list of Words and take user input to search a Text
 * 
 * @file       : UnOrderedList.js
 * @overview   : Read from file the list of Words and take user input to search a Text
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 14/05/2019
 * 
 */

 const u = require('./LinkedListUtility');
 const fs = require('fs');
 const rl = require('readline-sync');
 const list = new u.LinkedListNode();


 var words = [];

 var arr = fs.readFileSync('./DSTest.txt','utf8');
 words = arr.split(' ');


 for (let i = 0; i < words.length; i++) {
    list.addElement(words[i]);         
 }

 var dis = list.displayList();
 console.log(dis);

 var search = rl.questionInt('Enter element to search : ');
 var isFound = list.searchElement(search);

 if (isFound) {
     var ele = list.removeElement(search);
     console.log('Element found and deleted from the list ' +ele);
     var dis = list.displayList();
     console.log(dis);

 } 
 else {
   console.log('Element Not found');
     
 }

 






/**
 * Purpose     : ­Read from file the list of Words and take user input to search a Text
 * 
 * @file       : UnOrderedList.js
 * @overview   : Read from file the list of Words and take user input to search a Text
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
 * 
 */

 const u = require('./LinkedListUtility');
 const fs = require('fs');
 const rl = require('readline-sync');
 const list = new u.LinkedListNode();


 var words = [];
 var dis=[];

 var arr = fs.readFileSync('./DSTest.txt','utf8');
 words = arr.split(' ');


 for (let i = 0; i < words.length; i++) {
    list.addElement(words[i]);         
 }

 dis = list.displayList();
 console.log(dis);

 var search = rl.questionInt('Enter element to search : ');
 var isFound = list.searchElement(search);

 if (isFound) {
     var ele = list.removeElement(search);
     console.log('Element found and deleted from the list ' +ele+ '\nNew List is : ');
     var dis = list.displayList();
     console.log(dis);
     fs.writeFileSync('./DSTest.txt',dis.toString());
     console.log('File Updated sucessfully............');
     

 } 
 else {
   console.log('Element Not found');
   list.addElement(search);
   console.log('List After adding element: ');
   var dis = list.displayList();
   console.log(dis);
   fs.writeFileSync('./DSTest.txt',dis);
    console.log('File Updated sucessfully............');
   
 }

 






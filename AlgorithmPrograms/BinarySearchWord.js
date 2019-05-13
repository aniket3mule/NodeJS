/**
 * Purpose     : Binary Search the Word from Word List
 * 
 * @file       : BInarySearchWord.js
 * @overview   : Binary Search the Word from Word List
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 13/05/2019
 * 
 */

 const u = require('./Utility');
 const fs = require('fs');
 const rl = require('readline-sync');
 
 var words = [];
 var arr = fs.readFileSync('./TestFile.txt','utf8');
 var words = arr.split(',');
 var word = rl.question('Enter Word to find : ');

 words = u.bubbleSort(words);
     
    var result = u.binarySearchInteger(words,word);

     if(result == -1){
         console.log('Word not present in file.');
     }
     else{
         console.log('Word is present in the file');
         
     }
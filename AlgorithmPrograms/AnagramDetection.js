/**
 * Purpose     : An Anagram Detection Example
 * 
 * @file       : AnagramDetection.js
 * @overview   : An Anagram Detection Example
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */

 const u = require('./Utility');
 const rl = require('readline-sync');
 var str1 =[] , str2 = [];
 var status;
 str1 = rl.question('Enter string : ');
 str2 = rl.question('Enter another string to check the anagram : ');

 if(str1.length != str2.length){
     console.log('String length not matched');
 }
 else{
     status = u.anagramDetection(str1, str2);
 }

 if (status == true) {
     console.log('String is anagram ');
     
 }
 else{
     console.log('String not anagram');
     
 }
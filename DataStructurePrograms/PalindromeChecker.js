/**
 * Purpose     : True or False to Show if the String is Palindrome or not
 * 
 * @file       : PalindromeChecker.js
 * @overview   : True or False to Show if the String is Palindrome or not
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
 * 
 */


 const q = require('./Utility/Queue');
 const rl = require('readline-sync')
 const u = require('./Utility.js');
 const que = new q.Queue();

 var str = '';

 str = rl.question('Enter string to check it is palindrome or not using Deque : ');

 if (u.palindromeCheck(str)) {
     console.log('String is palindrome : ');
 }
 else{
     console.log('String is Not palindrome');
 }
 


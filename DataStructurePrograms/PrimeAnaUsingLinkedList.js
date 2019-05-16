/**
 * Purpose     : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
 *               the Linked List
 * 
 * @file       : PrimeAnaUsingLinkedList.js
 * @overview   : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
 *               the Linked List
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 16/05/2019
 *  
 */


 const ll = require('./Utility/LinkedListUtility');
 const st = require('./Utility/StackUtility');
 const rl = require('readline-sync');
 const u = require('./Utility');

 var primes = u.primeReturns(1000);

 primes.forEach(element => {
     console.log(element);
     
 });
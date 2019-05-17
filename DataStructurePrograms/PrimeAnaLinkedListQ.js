/**
 * Purpose     : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using
 *               the Linked List
 * 
 * @file       : PrimeAnaLinkedListQ.js
 * @overview   : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
 *               the Linked List
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 17/05/2019
 *  
 */


 const rl = require('readline-sync');
 const u = require('./Utility');
 const que = require('./Utility/Queue');
 const ll = require('./Utility/PrimeStackLinkedListUtility');

 const q = new que.Queue();
 const l = new ll.LinkedListStack();

 var primes = [];
 primes = u.primeReturns(1000);

 for (let i = 0; i < primes.length; i++) {
     for (let j = i+1; j < primes.length; j++) {
         if(u.anagramCheck(primes[i].toString(), primes[j].toString())){
             if (u.isPalindrome(primes[i],primes[j])) {
                 l.addElement(parseInt(primes[i]));
                 l.addElement(parseInt(primes[j]));
             }
         }   
     }
 }

 var prime_ana = [];
 prime_ana = l.displayList();

 prime_ana.forEach(element => {
     q.addItem(element);
 });
prime_ana.forEach(element => {
    console.log(q.delItem());

});

 
 
 
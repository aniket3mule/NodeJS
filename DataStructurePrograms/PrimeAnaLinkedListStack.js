/**
 * Purpose     : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
 *               the Linked List
 * 
 * @file       : PrimeAnaLinkedListStack.js
 * @overview   : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
 *               the Linked List
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 17/05/2019
 *  
 */


 const ll = require('./Utility/PrimeStackLinkedListUtility');
 const rl = require('readline-sync');
 const u = require('./Utility');
 const st = require('./Utility/PrimeStackUtility');
 const stck = new st.Stack();
 const li = new ll.LinkedListStack();


 var primes = u.primeReturns(1000);

 for (i = 0; i < primes.length; i++) {
    for ( j = i+1; j < primes.length; j++) {
        if(u.anagramCheck(primes[i].toString(), primes[j].toString())){
            if (u.isPalindrome(primes[i],primes[j])) {
                li.addElement(parseInt(primes[i]));
                li.addElement(parseInt(primes[j])); 
            }
        }
    }
 }

   var prime_Stack = li.displayList();
   prime_Stack.forEach(element => {
       stck.pushItem(element);
   });

   while (!stck.isEmpty()){
       console.log(stck.popItem());

   }

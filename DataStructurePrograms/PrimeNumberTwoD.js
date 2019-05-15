/**
 * Purpose     : Store the prime numbers in a 2D Array,
 * 
 * @file       : PrimeNumberTwoD.js
 * @overview   : Store the prime numbers in a 2D Array,
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
 * 
 */

 const u = require('./Utility.js')
 const rl = require('readline-sync')

 var primes = new Array(100);
 primes.push(2);
 var k = 0;


try {

 for(let i = 1 ; i<=1000;i++){
        if (u.primeCheck(i)) {
          primes.push(i)
           
        }
 }

    
    
} catch (error) {
    console.log(error);
    
}
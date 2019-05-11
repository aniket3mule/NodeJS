/**
 * Purpose     : Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range.
 * 
 * @file       : PrimeNumbers.js
 * @overview   : Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 11/05/2019
 * 
 */


const u = require('./Utility');
for (let i = 1; i <= 1000; i++) {
    if(u.isPrime(i)){
        console.log(i);
    }
}
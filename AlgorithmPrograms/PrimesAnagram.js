/**
 * Purpose     : program to find the prime numbers that are Anagram and Palindrome
 * 
 * @file       : PrimesAnagrams.js
 * @overview   : program to find the prime numbers that are Anagram and Palindrome
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 11/05/2019
 * 
 */

const u = require('./Utility');
var primes = [];
for (let i = 2; i <= 1000; i++) {
    if(u.isPrime(i)){
        primes.push(i);
    }
}
u.isAnagramPalindrome(primes);




/**
 * Purpose     : To print the all prime factors of a number
 * 
 * @file       : PrimeFactor.js
 * @overview   : Find all prime numbers of given number
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */
//Importing the pre-defines functions
 const readline = require('readline');
 const rl = readline.createInterface(process.stdin, process.stdout);
 const u = require('./utility')

 rl.question('Enter number to find the prime factors  ',(input)=>{
     u.primeFactor(input);
     rl.close();
 });
 
/**
 * Purpose     : Generate and print the randome numbers
 * 
 * @file       : RandomNumber.js
 * @overview   : Print the random numbers
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 09/05/2019
 * 
 */
const u = require('./utility.js');
const rl = require('readline-sync');
//const rl = readline.createInterface(process.stdin, process.stdout);

var n;
var arr = [];
n = rl.questionInt('Enter N number of coupon wants to generate : ');
arr = u.randomNumber(n);

arr.forEach(element => {
   console.log(element);
    
});
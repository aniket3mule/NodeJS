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
const readline = require('readline');
//const rl = readline.createInterface(process.stdin, process.stdout);

var low = 1, high =100;
var arr = [high+high];

for(var i = 0; i<=high; i++){

   arr.push(u.randomNumber(low,high));
}

arr.forEach(j => {
    console.log(arr[j]);
});


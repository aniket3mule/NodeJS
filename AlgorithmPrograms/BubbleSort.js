/**
 * Purpose     : Reads in Integers from standard input and prints them in sorted order.
 * 
 * @file       : BubbleSort.js
 * @overview   : Reads in Integers from standard input and prints them in sorted order.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 13/05/2019
 * 
 */

const u = require('./Utility');
const rl = require('readline-sync');
var n = rl.questionInt('Enter array length : ');
var arr = [];
//var arr1 =[];
for (let i = 0; i < n; i++) {
   arr[i] = rl.questionInt('Enter String values : ');
}

arr = u.bubbleSort(arr);
arr.forEach(element => {
    console.log(element);
});
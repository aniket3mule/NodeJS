/**
 * Purpose     : Reads in strings from standard input and prints them in sorted order.
 * 
 * @file       : InsertionSortString.js
 * @overview   : Reads in strings from standard input and prints them in sorted order.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 11/05/2019
 * 
 */

const u = require('./Utility');
const rl = require('readline-sync');
var n = rl.questionInt('Enter array length : ');
var arr = [];
var arr1 =[];
for (let i = 0; i < n; i++) {
   arr.push(rl.question('Enter String values : '));
}
arr1 = u.insertionSort(arr);
arr1.forEach(element => {
    console.log(element);
});
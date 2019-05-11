/**
 * Purpose     : Reads in integers prints them in sorted order using Bubble Sort
 * 
 * @file       : BinarySearch.js
 * @overview   : Reads in integers prints them in sorted order using Bubble Sort
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
    arr.push(rl.questionInt('Enter ${n} Integer values : '));
 }
 arr1 = u.bubbleSort(arr);
 arr1.forEach(element => {
     console.log(element);
 });

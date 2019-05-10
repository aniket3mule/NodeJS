/**
 * Purpose     : ­A program with cubic running time. Read in N integers and counts the
 *               number of triples that sum to exactly 0.
 * 
 * @file       : SumOfThree.js
 * @overview   : Read in N integers and counts the number of triples that sum to exactly 0.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */

 const u = require('./utility');
 const rl = require('readline-sync');

 var arr = [];
 var n;
 n = rl.questionInt('Enter array size: ')
 for (let i = 0; i < n; i++) {
    arr.push(rl.questionInt('Enter interger values : '));
 }

 u.sumOfNumber(arr);

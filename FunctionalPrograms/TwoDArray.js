/**
 * Purpose     : A library for reading in 2D arrays of integers, doubles, or booleans from
 *               standard input and printing them out to standard output.
 * 
 * @file       : TwoDArray.js
 * @overview   : Reading in 2D arrays of integers, doubles, or booleans from
 *               standard input
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */

 const u = require('./utility');
 const rl = require('readline-sync');

 var rows, cols;

 rows = rl.questionInt('Enter Number of Rows : ');
 cols = rl.questionInt('Enter Number of Columns : ');

 u.twoDArray(rows, cols);

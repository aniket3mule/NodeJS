/**
 * Purpose     : ­Prints the Euclidean distance from the point (x, y) to the origin (0, 0)
 * 
 * @file       : Distance.js
 * @overview   : prints the Euclidean distance from the point (x, y) to the origin (0, 0)
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */

 const u = require('./utility')
 const rl = require('readline-sync')

 var x, y;

 x = rl.questionInt('Enter value for x axis : ');
 y = rl.questionInt('Enter Value for y axis : ');

 u.distanceCalculate(x, y);


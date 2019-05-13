/**
 * Purpose     : Compute the square root of a non-negative number using Newton's method:
 * 
 * @file       : Sqrt.js
 * @overview   : Compute the square root of a non-negative number using Newton's method:
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 13/05/2019
 * 
 */

 const u = require('./Utility');
 const rl = require('readline-sync');

 const epsilon = 1e-15;
 var c ; 

 c = rl.questionInt('Enter Non - Negative number to find the sqrt: ');
 t = c; 
 var sqrt = u.sqrt(t, epsilon ,c );
 console.log('Square root of number using newtons method is : '+sqrt);

 


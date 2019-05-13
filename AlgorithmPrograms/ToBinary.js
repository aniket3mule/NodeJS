/**
 * Purpose     : Binary representation of the decimal number
 * 
 * @file       : ToBinary.js
 * @overview   : Binary representation of the decimal number
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 13/05/2019
 * 
 */


 const u = require('./Utility');
 const rl = require('readline-sync');

 var dec = rl.questionInt('Enter decimal to print the binary output : ');
 var binaryarr = u.decimalToBinary(dec);
 
 for (let i = binaryarr.length-1; i >=0 ; i--) {
     var str =binaryarr[i].toString();
     process.stdout.write(str);     
 }
 console.log('');
 
 



/**
 * Purpose     : given the temperature in fahrenheit as input outputs 
 *               the temperature in Celsius or viceversa
 * 
 * @file       : TemperatureConversion.js
 * @overview   : given the temperature in fahrenheit as input outputs 
 *               the temperature in Celsius or viceversa using
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 11/05/2019
 * 
 */

 const u = require('./Utility');
 const rl = require('readline-sync');

 var ch = rl.questionInt('1: Convert Fehrenheit To Celsius\n2:Convert Celsius To Fehrenheit.\nEnter Your choice : ');

 switch (ch) {
     case 1:
         var temp = rl.question('Enter temperature in fehrenheit : ')
         var c = u.fahrenheitToCelsius(temp);
         console.log('Fehrenheit To Celsius : ',c);
         break;
     case 2:
         var temp = rl.question('Enter temperature in Celsius : ')
         var c = u.celsiusToFehrenheit(temp);
         console.log('Celsius To Fehrenheit is : ',c);
         break;
 
     default:
     console.log('Enter valid option : ');
         break;
 }
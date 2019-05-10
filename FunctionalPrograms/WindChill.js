/**
 * Purpose     : Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
 *               the National Weather Service defines the effective temperature (the wind chill) to be
 * 
 * @file       : WindChill.js
 * @overview   : Simulates a gambler who start with $stake and place fair $1 bets until
 *               he/she goes broke or reach goal
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */

 const u = require('./utility');
 const rl = require('readline-sync');

 var t, v;
 
 t = rl.questionInt('Enter temperature : ');
 v = rl.questionInt('Enter wind speed in miles per hour : ');

 if(t>50 || (v>120 && v<3)){
     console.log('invalid temperature or wind speed');
 }
 else{
     u.windChill(t, v);
 }

 
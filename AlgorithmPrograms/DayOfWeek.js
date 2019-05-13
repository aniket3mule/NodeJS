/**
 * Purpose     : Prints the day of the week that date falls on.
 * 
 * @file       : DayOfWeek.js
 * @overview   : Prints the day of the week that date falls on.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 13/05/2019
 * 
 */


const u = require('./Utility');
var d = 25, m = 12, y = 2019
var day = u.dayOfWeek(m, d, y);

var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(d+'/'+m+'/'+y);

console.log('day of the week is : '+day+ ' : '+week[day]);

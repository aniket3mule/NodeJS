/**Execution   : default node       cmd> node LeapYear.js
 * Purpose     : To check the year is leap year or not?
 * 
 * @file       : LeapYear.js
 * @overview   : Varifying the year is leap year or not
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 09/05/2019
 * 
 */
//Importing the files
const u = require('./utility.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//Takes the user input
 rl.question('Enter a year to check leap year  ', (input)=>{
    console.log(u.leapYear(input));
    rl.close();
});
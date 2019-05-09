/**Execution   : default node       cmd> node Harmonic.js
 * Purpose     : Print nth harmonic value.
 * 
 * @file       : Harmonic.js
 * @overview   : Print nth harmonic value
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 09/05/2019
 * 
 */
//Importing the pre-defines functions
const u = require('./utility.js') 
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

 //Takes the user input
 rl.question('Enter Number to find harmonic of that num:  ',function(input){
     console.log(u.harmonicFuc(input));
     r1.close();
  });

      
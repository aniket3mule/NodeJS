/**Execution   : default node       cmd> node Harmonic.js
 * Purpose     : Prints the Nth power of 2 
 * 
 * @file       : PowerOf2.js
 * @overview   : Prints the Nth power of 2 
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 09/05/2019
 * 
 */
//Importing the files
const u = require('./utility');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

 rl.question('Enter positive integer to find power of 2  ',(input)=>{
    console.log(u.powerOf2(input));
    rl.close();
});
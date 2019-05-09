/**Execution   : default node       cmd> node FlipCoin.js
 * Purpose     : Checking the probability of a coin
 * 
 * @file       : FlipCoin.js
 * @overview   : Checking the probabilty of the coin how many times its head or tails.
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
 rl.question('Enter how many time you want to flip the coin?  ',(input)=>{
    //calls the funstion
    u.flipCoin(input);
    rl.close();
});
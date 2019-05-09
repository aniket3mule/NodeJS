/**Execution   : default node       cmd> node ReplaceString.js
 * Purpose     : Replacing string with user input string
 * 
 * @file       : ReplaceString.js
 * @overview   : Replacing the string with user input name
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
 rl.question('Enter your name to Replace <<username>>  ', (input) =>{
    //Calls the function raplaceString and pass the input as parameter and prints the return output
    console.log( u.replaceString(input));
    rl.close();
});

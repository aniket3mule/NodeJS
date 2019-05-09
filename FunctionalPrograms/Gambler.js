/**
 * Purpose     : Simulates a gambler who start with $stake and place fair $1 bets until
 *               he/she goes broke
 * 
 * @file       : Gambler.js
 * @overview   : Simulates a gambler who start with $stake and place fair $1 bets until
 *               he/she goes broke or reach goal
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 09/05/2019
 * 
 */
const u = require('./utility.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

var stake, goal, wins, bets, trials;

rl.question('Enter Stake ',(stake)=>{
    rl.question('Enter Goal ',(goal)=>{
        if(stake>=goal){
            console.log('Goal cannot be less than stake ' );
        }
       
        rl.question('Enter Trials ',(trials)=>{
            u.gambler(stake, goal, trials);
rl.close();

        });
    });
});

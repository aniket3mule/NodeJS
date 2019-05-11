/**
 * Purpose     : Simulates a gambler who start with $stake and place fair $1 bets until
 *               he/she goes broke
 * 
 * @file       : Gambler.js
 * @overview   : Simulates a gambler who start with $stake and place fair $1 bets until
 *               he/she goes broke or reach goal
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */
const u = require('./utility.js');
const rl = require('readline-sync');


var stake=0, goal=0, wins=0, bets=0, trails=0;

stake = rl.questionInt('Enter Stake ');
goal = rl.questionInt('Enter Goal ');
        while(stake>=goal){
            goal = rl.questionInt('Goal cannot be less than stake ' );
        }
            trails = rl.questionInt('Enter Trials ');
            u.gambler(stake, goal, trails, bets, wins);
            rl.close;

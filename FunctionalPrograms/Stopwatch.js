/**
 * Purpose     : ­Write a Stopwatch Program for measuring the time that elapses between
 *               the start and end clicks
 * 
 * @file       : Stopwatch.js
 * @overview   : Write a Stopwatch Program for measuring the time that elapses between
 *               the start and end clicks
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */

 const u = require('./utility');
 const rl = require('readline-sync');
 var key=0;
 var starttime, endtime;
 key = rl.questionInt('press 1 to start the stop watch : ');
 stopwatchfun();
 function stopwatchfun(){
    switch (key) {
        case 1:
        starttime = process.hrtime();
        key = rl.questionInt('press 2 to stop stopwatch : ');
        stopwatchfun();
            break;
        case 2:
        endtime = process.hrtime();
        u.stopWatch(starttime, endtime);
            break;
        default:
        console.log('Invalid input');
            break;
    }

 }
 
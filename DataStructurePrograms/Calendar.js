/**
 * Purpose     : Prints the Calendar of the month
 * 
 * @file       : Calendar.js
 * @overview   : Prints the Calendar of the month.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 17/05/2019
 * 
 */

 const u = require('./Utility');
 const rl = require('readline-sync');
 

 var week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
 var days = [0,31,28,31,30,31,30,31,31,30,31,30,31];
 
 calendar2D();
function calendar2D() {
try {
    var month = rl.questionInt('Enter Month : ')
    var year = rl.questionInt('Enter Year : ');

    var status = u.leapYear(year);
    
    if(status){
        days[2] = 29;
    }
    if (month <= 0 || month > 12 ) {
        console.log('Enter Valid Month : ');
        calendar2D();
    }
    else{
        if(year.toString().length !=4){
            console.log('Enter Valid year : ');
            calendar2D();
        }
    }
    
    var day = u.dayOfWeek(1,month, year);

    for (let i = 0; i < week.length; i++) {
        process.stdout.write(week[i]+ '  ')
    }
    console.log();

    for (let j = 0; j < (day*5); j++) {
        process.stdout.write(' ');
    }
    if ((day*5)==35) {
        console.log();
    }

    for (let i = 1; i <= days[month]; i++) {
        if (i < 10) {
            process.stdout.write(" " +i+ "   ");
        }

        if (i > 9) {
            process.stdout.write(i+ "   ")
        }
        if ((i + day) % 7 == 0) {
            console.log();
        }
    }

    console.log("\n\n");
} 

catch (error) {
    console.log(error);   
}
}
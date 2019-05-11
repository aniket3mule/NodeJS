/**
 * Purpose     : To write all logic and functions
 * 
 * @file       : utility.js
 * @overview   : Logic for all functional programs
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 09/05/2019
 * 
 */

 module.exports = {
/*******************Replace String**************************** */
     //function to replace the <<username>> with input user
replaceString(input){

    var str = 'Hello <<username>>, How are you? ';
    var len = input.length;
    // check if user input string greater than 3 or not
    if(len>=3){
        var out = str.replace('<<username>>',input);
        return out;
        }
    else{
        return 'Enter name with more than 3 char';        

    }
        
    },


/*******************Flip coin program, probability to get head percentage or tail percentage******************** */
    flipCoin(input){
        var tail=0, head=0, tailper, headper, n = input;
        for (var i = 0; i < n; i++) {
            if (Math.random()<0.5) {
                tail++;
            } else {
                head++;
            }
        }
        tailper = (tail/n)*100;
        headper = (head/n)*100;
        console.log('Percentage of tail is : '+tailper+'%');
        console.log('Percentage of head is : '+headper+'%');
        console.log('Number of tails : '+tail);
        console.log('Number of head : '+head);
    },

/*******************Checking year is leap year or not**************************** */
    leapYear(input){
        //varifies input year should be of 4 digit
        if(input.length==4){
            //Logic to check the input year is leap year or not
            if ((input%4==0 && input%100!=0)|| input%400==0) {
                return 'year is leap year';
            }
            else{
                return 'year is not a leap year';
            }
        }
        else{
            return 'Please enter valid year';
        }
    },

/*******************Printing the nth harmonic number**************************** */
    harmonicFuc(input){
        var sum =1;
        //repeat till input
        for (var i = 1; i <= input; i++) {
           sum += 1/i; 
        }
        return input+ 'th Harmonic value is : '+sum;
    },


/*******************Prime Factorization**************************** */
    primeFactor(num) {
        console.log("Prime Factor is:");
        for (let i = 2; i*i < num; i++) {
            while (num % i == 0) {
                console.log(i + " ");
                num = num / i;
            }
        }
        if (num > 2) {
            console.log(num);
        }
    },

/*********************Nth Power of 2 ******************************************* */
    powerOf2(input){
    
        var sum=1;
        //checking number should be greater than 1 and less equals to 31
        if(input>=1 && input<=31){
            for (var i = 0; i < input; i++) {
                sum = sum*2;
            }
            return input+' power of 2 is : '+sum;
        }
        else{
            return 'invalid input';
        }
    },


/*************************Random number generator***************************** */

    randomNumber(low, high){
        return Math.floor(Math.random()*(high-low+1)+low);
    },

/*************************Gambler***************************** */
gambler(stake, goal, trails, bets, wins){
    
    for(var i = 0; i<=trails; i++){
        if(Math.random()<0.5){
            stake= stake-1;
            bets++;
        }
        else{
            bets++;
            stake= stake+ 1;
            wins++;
            
        }
        if(stake===goal){
            console.log('\n You win....');
            break;
        }
        if(stake===0){
            console.log('\n You loss...');
            break;
        }
    }
    console.log('\nNumber of wins : '+wins);
    console.log('Number of losses are : '+(trails-wins))
    console.log('Number of bets : '+bets);
    console.log('Percentage of wins : '+wins/trails*100+'%');
    console.log('Percentage of wins : '+((trails-wins)/trails*100)+'%');
    console.log('current stake is : '+stake);
},


/*************************2 D Array***************************** */
twoDArray(rows, cols){
    const rl = require('readline-sync');
    var arr=[] ;
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array();
        for (let j = 0; j < rows; j++) {
            arr[i][j] = rl.question('Enter Values : ');
        }  
    }
    for (let k = 0; k < cols; k++) {
        for (let l = 0; l < rows; l++) {
            console.log(arr[k][l] );
        }
        console.log('');
    }
},

/************************N integers and counts the number of triples that sum to exactly 0.***************************** */

sumOfNumber(arr){
    var count=0;
    for(var i =0; i<arr.length-2;i++){
        for (let j = 0; j < arr.length-1; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i]+arr[j]+arr[k] === 0) {
                    console.log(arr[i]+' '+arr[j]+' '+arr[k]+ ' = 0');
                    count++
                }
            }
        }      
    }
    console.log('Number of distinct triplets : '+count);
},



/************************Prints the Euclidean distance from the point (x, y) to the origin (0, 0)***************************** */
distanceCalculate(x, y){
    var dis = Math.sqrt((Math.pow(x,x)), (Math.pow(y,y)));
    console.log(dis);
},

/************************Calculate elapsed time between start time and stop time***************************** */

stopWatch(starttime, endtime){
    var startmili = (starttime[0] * 1000 + starttime[1] / 1000000);
    var endmili = endtime[0] * 1000 + endtime[1] / 1000000;
    var elapsed = endmili - startmili; 
    console.log('Elapsed time in mili second is : '+elapsed);
},


windChill(t, v){
    var w = 35.74 + 0.6215*t +(0.4275*t - 35.75) * Math.pow(v,0.16);
    console.log('National Weather Service defines the effective temperature to be: ' +w);
},

}


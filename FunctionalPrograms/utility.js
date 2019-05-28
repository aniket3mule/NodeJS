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
        console.log(out);
        
        return "name changes Successfully"
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
        console.log("input",input);
        
        //varifies input year should be of 4 digit
        if(input.length===4){
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
        console.log(input+ 'th Harmonic value is : '+sum);
        return "Series successfully"
         
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

    randomNumber(n){
        var arr = [];
        for (var i = 0; i < n; i++) {
            arr[i] = Math.floor(Math.random() * n);
            for (var j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    i--;
                }
            }
        }
        return arr;
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
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array();
        for (let j = 0; j < cols; j++) {
            arr[i][j] = rl.question('Enter Values : ');
        }  
    }
    for (let k = 0; k < rows; k++) {
        for (let l = 0; l < cols; l++) {
            process.stdout.write(arr[k][l]+' | ');
         //   console.log( );
        }
        console.log();
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


/************************WindChill Program***************************** */

windChill(t, v){
    var w = 35.74 + 0.6215*t +(0.4275*t - 35.75) * Math.pow(v,0.16);
    console.log('National Weather Service defines the effective temperature to be: ' +w);
},

/**********************Find the roots of the equation(Quadratic)************************/

quadratic(a, b, c){
    var root1 =0 ,root2=0;
    var delta;

    delta = ((b*b) - (4*a*c));

    var sqrt = Math.sqrt(Math.abs(delta));
   
    root1 = (-b + sqrt )/(2*a);
    root2 = (-b - sqrt )/(2*a);

    if (delta>0) {
        console.log('Roots are real and diffrent : \n Root1 : ' +root1+ '  Root2 : '+root2 );
        
    }
    else if(delta<0){
        console.log('Roots are Complex : \n' +((-b )/(2*a)).toFixed(2)+ ' +i'+sqrt.toFixed(2)+'\n'+((-b )/(2*a)).toFixed(2)+ ' +i'+sqrt.toFixed(2) );
    }
},



}


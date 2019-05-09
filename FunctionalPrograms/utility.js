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
            if ((input%4==0&&input%100!=0)|| input%400==0) {
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
gambler(stake, goal, trails){
    

}


}


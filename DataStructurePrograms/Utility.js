/**
 * Purpose     : Logic for all the programs
 * 
 * @file       : Utility.js
 * @overview   : Logic for all the programs
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
 * 
 */
const q = require('./Utility/Queue');
const que = new q.Queue();
 module.exports = {


    /********************True or False to Show if the String is Palindrome or not************************* */

    palindromeCheck(str){
        var temp = '';
        for (let i = str.length-1; i >= 0; i--) {
            que.addItem(str[i]);
        }
       
        for (let j = 0; j < str.length; j++) {
            temp += que.delItem();
        }
        return temp==str;
    },


    /********************Prime number check************************* */
    primeCheck(prime){
        for (let i = 2; i < prime; i++) {
            if(prime%i==0){
                return false;
            }
                return true;
        }

    },


    /********************Anagram check************************ */

    anagramCheck(str1 , str2){
        var str1 = str1.toLowerCase();
        var str2 = str2.toLowerCase();
        var res1 = str1.split('').sort();
        var res2 = str2.split('').sort();

        if (res1.length==res2.length) {
            var j =0 ;
            while (j<res1.length) {
                for (let i = j; i < res1.length; i++){
                    if (res1[j]!= res2[i]) {

                        return false;
                    }
                    else{
                        j++;
                    }
                }
            }
        }
        return true;
    },


     /********************Palindrome Number************************ */

     isPalindrome(num1, num2) {
        var str = '';
        num1 = num1+'';
        num2 = num2+'';
        for (let i = 0; i < num1.length; i++) {
            str = num1.charAt(i) + str;

        }
        if (str == num2) {
            return true;
        }
        return false;
    },

    /********************Returns the Prime Number************************ */

    primeReturns(n){
    let primes = [];
        let index = 0;
        for (let i = 2; i < n; i++) {
            let notPrime = 0;
    
            for (let j = 2; j < i ; j++) {
                if (i % j == 0) {
                    notPrime = 1;
                    break;
                }
            }

            if (notPrime != 1) {
                primes[index] = i;
                index++;
            }
        }
        return primes;
    },


    /********************Calendar Logic************************ */


    /******************Prints the day of the week that date falls on*************************/

    dayOfWeek(d,m,y){
        var year = (y-(Math.floor(14-m)/12));
        var x = year+Math.floor((year/4))-Math.floor((year/100))+Math.floor((year/400));
        var month = m+12 *(Math.floor((14-m)/12))-2;
        day = Math.ceil(((d+x+Math.floor(31*month/12))%7));
        return day;
    },

    /*******************Checking year is leap year or not**************************** */
    leapYear(input){
        //varifies input year should be of 4 digit
        if(input.length==4){
            //Logic to check the input year is leap year or not
            if ((input%4==0 && input%100!=0)|| input%400==0) {
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false
        }
    },



    
 }
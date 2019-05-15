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


    primeCheck(prime){
        for (let i = 2; i < prime; i++) {
            if(prime%i==0){
                return false;
            }
                return true;
        }

    }




 }
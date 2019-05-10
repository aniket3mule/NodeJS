/**
 * Purpose     : To write all logic and functions
 * 
 * @file       : Utility.js
 * @overview   : Logic for all Algorithm programs
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */

 /*****************************An Anagram Detection Example********************************** */

 module.exports = {
     anagramDetection(str1, str2){
         var count=0;
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



     /****************Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range.********************************** */

     primeNumber(){
         
     }

 }
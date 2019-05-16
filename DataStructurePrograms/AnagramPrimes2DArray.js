/**
 * Purpose     : Store in a 2D Array the numbers that are Anagram and numbers that are not Anagram
 * 
 * @file       : AnagramPrimes2DArray.js
 * @overview   : Store in a 2D Array the numbers that are Anagram and numbers that are not Anagram
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 16/05/2019
 * 
 */

 const u = require('./Utility');
 const rl = require('readline-sync');
 var k=0,l=1,i = 0, j;

 var list1=[];
 var list2=[];

 var primes = new Array();

try {
 for (let p = 1; p <1000; p++) {
     if(u.primeCheck(p)){
         primes.push(parseInt(p));  
     }
 }

for (i = 0; i < primes.length; i++) {
    for ( j = i+1; j < primes.length; j++) {
        if(u.anagramCheck(primes[i].toString(), primes[j].toString())){
            if (u.isPalindrome(primes[i],primes[j])) {
                list1.push(parseInt(primes[i]));
                list2.push(parseInt(primes[j])); 
            }
        }
    }
}
var prime_num = list1.concat(list2);
let non_primes = primes.filter((o) => prime_num.indexOf(o) === -1);

var jarray = [['Anagram','Not Anagram']];
for (var h=0; h<prime_num.length && h<non_primes.length; h++){
    jarray[h] = [[prime_num[h]], [non_primes[h]]];
}

 for (var a  in jarray) {
    for(var b in jarray[a] ) {
     process.stdout.write(jarray[a][b] + "   |");
      
    }
    console.log('   ');
  }
} 
catch (error) {
    console.log(error);
}
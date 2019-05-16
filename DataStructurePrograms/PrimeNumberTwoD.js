/**
 * Purpose     : Store the prime numbers in a 2D Array,
 * 
 * @file       : PrimeNumberTwoD.js
 * @overview   : Store the prime numbers in a 2D Array,
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 16/05/2019
 * 
 */

 const u = require('./Utility.js')
 const rl = require('readline-sync')


 var primes = new Array();
 primes.push(2);
 var i = 0,j=1;
 var range =100;
 var arr = [["100"],["200"],["300"],["400"],["500"],
            ["600"],["700"],["800"],["900"],["1000"]];

for(let p = 1 ; p<1000;p++){
if (u.primeCheck(p)) {
  primes.push(p);
}
}

try {
 for(let k = 0 ; k<primes.length;k++){
        
          if (primes[k] < range) {
            arr[i][j] = primes[k];
            j++;
          }
          else{
            j=1;
            range +=100;
            i++;
            arr[i][j] = primes[k];
          }
 }

 for (var j in arr[i]) {
   for(var i in arr ) {
    process.stdout.write(arr[i][j] + "   |");
     
   }
   console.log('   ');
 }
console.log();
}
catch (error) {
    console.log(error);
    
}
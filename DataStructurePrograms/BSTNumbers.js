/**
 * Purpose     : Number of Binary Search Tree
 * 
 * @file       : BSTNumbers.js
 * @overview   : Number of Binary Search Tree
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 20/05/2019
 * 
 */

 const rl = require('readline-sync');
 const u = require('./Utility')

 var n = rl.questionInt('Enter number of Node : ');
 
 var T = new Array(n+1);
 T[0] =1 ;
 T[1] =1;
for(var i=2; i <= n; i++){
    T[i]=0;
    for(var j=0; j <i; j++){
      
        T[i] +=parseInt(T[j])*parseInt(T[i-j-1]);
    }
}
    console.log(T[n]);
   



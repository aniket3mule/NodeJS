/**
 * Purpose     : Write main function to call the utility function
 * 
 * @file       : SortingAlgo.js
 * @overview   : Write main function to call the utility function
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 11/05/2019
 * 
 */


 const u = require('./Utility');
 var arr = [38,58,19,6,2,5,6,8,0];
 var arr1 = ['Shubham', 'Saurabh', 'Laxman', 'Nainesh','Aniket']
 var num = 19;

 var bubble_int = u.bubbleSort(arr);
 var insertion_int = u.insertionSort(arr1);
 bubble_int.forEach(element => {
     console.log(element);
 });
 insertion_int.forEach(element => {
     console.log(element);
 });
 


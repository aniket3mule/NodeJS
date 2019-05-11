/**
 * Purpose     : Write a program with Static Functions to do Merge Sort of list of Strings
 * 
 * @file       : MergeSort.js
 * @overview   : Write a program with Static Functions to do Merge Sort of list of Strings
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 11/05/2019
 * 
 */

const u = require('./Utility'); 
var list1 = [5, 70, 55, 4, 8, 3, 2, 6,19,54,];
//var list3 = [];
//var m = list1.length;
//var n = list2.length;
var l = 0;
var r = list1.length-1;
u.sort(list1, l, r);


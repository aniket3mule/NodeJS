/**
 * Purpose     : Function to calculate monthlyPayment that reads in three
 *               command­line arguments P, Y, and R and calculates the monthly payments
 * 
 * @file       : MonthlyPayment.js
 * @overview   : Function to calculate monthlyPayment that reads in three
 *               command­line arguments P, Y, and R and calculates the monthly payments
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 13/05/2019
 * 
 */

 const u = require('./Utility');
 var p = 1000, r = 10, y =5;

 var payment = u.monthlyPayment(p,y,r);

 console.log('Monthly payment is : ',payment);
 
/**
 * Purpose     : Find the Fewest Notes to be returned for Vending Machine
 * 
 * @file       : VendingMachine.js
 * @overview   : Find the Fewest Notes to be returned for Vending Machine
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 13/05/2019
 * 
 */

 const u = require('./Utility');
 const rl = require('readline-sync');

 var amount = rl.questionInt('Enter Amount : ');

 u.vendingMachine(amount);
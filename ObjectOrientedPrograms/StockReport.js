/*
 * Purpose     : Calculate the value of each stock and the total value
 * 
 * @file       : StockReport.js
 * @overview   : Calculate the value of each stock and the total value
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 21/05/2019
 * 
 */

 const readline = require('readline-sync');


 class Stock{
     constructor(){
         this.stock_names;
         this.num_of_shares;
         this.share_price;
     }
     
     stockReport(){
         var n = readline.questionInt('Enter number of stocks : ');

         for (let i = 0; i < n; i++) {
             StockReportJSON = {
                 stock_names : this.stock_names = readline.question('Enter Stock Name : ')
             }
         }
     }


 }

 module.exports = {
     Stock
 }
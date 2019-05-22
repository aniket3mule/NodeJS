/*
 * Purpose     : Calculate the value of each stock and the total value
 * 
 * @file       : StockReport.js
 * @overview   : Calculate the value of each stock and the total value
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 22/05/2019
 * 
 */

 const stockutility = require('./UtilityClass/StockReportUtility');
 const readline = require('readline-sync');

 const stockreport = new stockutility.Stock();

 const ch = readline.questionInt('What you want to do :   1: Add New Stock List OR\n\t\t\t2: Purchare shares\n');

 switch (ch) {
    case 1:
        stockreport.addStocks();
        break; 
    case 2:
        stockreport.stockValue();
        break;
 
    default:
        console.log('Please Enter Valid Option ............');
        break;
 }
 
 
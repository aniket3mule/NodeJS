/*
 * Purpose     : Calculate the value of each stock and the total value
 * 
 * @file       : StockReportUtility.js
 * @overview   : Calculate the value of each stock and the total value
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 22/05/2019
 * 
 */

 const readline = require('readline-sync');
 const fs = require('fs');


 class Stock{
     constructor(){
         this.stock_names =null;
         this.num_of_shares =0 ;
         this.share_price=0;
     }

     //Function to add Stocks in JSON file.
     
     addStocks(){
        var n = readline.questionInt('Enter number of stocks : ');
        try {
            var data = fs.readFileSync('./JSON/StockReport.json', 'utf8');
            //parse(data); Converts the JSON string into an object
            //JSON : object that provide methods to convert js value to or from JSON format 
            var obj = JSON.parse(data);

            for (let i = 0; i < n; i++) {
                this.stock_names = readline.question('Enter Stock Name : ');
                this.num_of_shares = readline.questionInt('Enter number of shares : ');
                this.share_price = readline.questionFloat('Enter Share price : ')
                obj.Stocks.push({
                    "Stock_names" : this.stock_names,
                    "Number_of_shares" : this.num_of_shares,
                    "Share_price" : this.share_price
                });

                //stringify() convert JS value to JSON string
                //JSON : object that provide methods to convert js value to or from JSON format 
                var json = JSON.stringify(obj,null,2);
                fs.writeFileSync('./JSON/StockReport.json', json);
                console.log('Data added in JSON file..........');
                
            }
        } 
        catch (error) {
            console.log(error);
        }
    }

    //Function to purchase the shares from current stock data
    stockValue(){
        try {
            var data = fs.readFileSync('./JSON/StockReport.json','utf8');
            
            //parse(data); Converts the JSON string into an OBJECT
            //JSON : object that provide functions to convert js value to or from JSON format 
            var obj = JSON.parse(data);

            console.log('Stock Lists : ');
            
            var i=0,j=1,ch=0;
            
            for (i = 0; i<obj.Stocks.length; i++) {
                console.log(j+++' : '+obj.Stocks[i].Stock_names);
            }
           ch = readline.questionInt('Enter which stock share you want to purchase : ');
           console.log('Price per share is : '+obj.Stocks[ch-1].Share_price)
           var shares = readline.questionInt('Enter Number of shares you want to purchase : ')
            
            switch (ch) {
                case ch:
                    console.log('Total price of your share is : '+shares*obj.Stocks[ch-1].Share_price);
                    break;
                default:
                    console.log('Enter Valid option ........');
                    break;
            }
        } 
        catch (error) {
            console.log(error);
        }
    }
 }

 module.exports = {
     Stock
 }
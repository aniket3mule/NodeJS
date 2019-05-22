/*
 * Purpose     : StockAccount implements a data type that might be used by a financial 
 *               institution to keep track of customer information.
 * 
 * @file       : StockReportUtility.js
 * @overview   : StockAccount implements a data type that might be used by a financial 
 *               institution to keep track of customer information.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 22/05/2019
 * 
 */

 const readline = require('readline-sync');
 const fs = require('fs');


 class CustomerDetails{
     CustomerDetails(name, shares, amount, tDate){
         this.name = name;
         this.shares = shares;
         this.amount = amount;
         this.transactionDate = tDate;
     }
 }

 class CompanyDetails{
     CompanyDetails(companyName, companysymbol, noOfShares ){
        this.companyName = companyName;
        this.companySymbol = companysymbol;
        this.noOfShares = noOfShares;
        
     }
 }

 class StockAccount{

    //Create new user account
    constructor(){
        this.data = fs.readFileSync('./JSON/StockAccount.json','utf8');
        this.stockData = JSON.parse(this.data);
        this.date = new Date();
    }

     createAccount(){
         var name = readline.question('Enter New Customer Name : ');
         var shares = readline.questionInt('Enter Number of shares : ');
         var amount = readline.questionInt('Enter Amount : ');

         var custInfo = {
             Name : name,
             Shares : shares,
             Amount : amount,
             TrasactionDate : date
         }

         this.stockData.Customers.push(custInfo);
        //stringify() convert JS value to JSON string
        //JSON : object that provide methods to convert js value to or from JSON format
         var json = JSON.stringify(this.stockData,null,2);
         fs.writeFileSync('./JSON/StockAccount.json',json);
     }

     addCompanyShare(){
        
        var cname = readline.question('Enter Company Name : ');
        var csymbol = readline.question('Enter Company Symbol : ')
        var shares = readline.questionInt('Enter Number of shares : ');
        var amount = readline.questionInt('Enter Amount : ');
     }

     buyShares(csymbol,amount,user){
            this.stockData.CompanyShare[csymbol-1].Shares = this.stockData.CompanyShare[csymbol-1].Shares - amount;
            var json = JSON.stringify(this.stockData,null,2);
            fs.writeFileSync('./JSON/StockAccount.json',json);
     }
 }

 module.exports = {
     StockAccount
 }

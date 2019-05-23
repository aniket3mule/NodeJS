/*
 * Purpose     : StockAccount implements a data type that might be used by a financial 
 *               institution to keep track of customer information.
 * 
 * @file       : StockAccountUtility.js
 * @overview   : StockAccount implements a data type that might be used by a financial 
 *               institution to keep track of customer information.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 22/05/2019
 * 
 */

 const readline = require('readline-sync');
 const fs = require('fs');

 class StockAccount{

    //Create new user account
    constructor(){
        this.data = fs.readFileSync('./JSON/StockAccount.json','utf8');
        this.stockData = JSON.parse(this.data);
        this.date = new Date();
    }

     createAccount(name){
         
         var shares = readline.questionInt('\nEnter Number of shares : ');
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
         this.saveData();
     }

     addCompanyShare(){
        var cname = readline.question('\nEnter Company Name : ');
        var csymbol = readline.question('Enter Company Symbol : ')
        var shares = readline.questionInt('Enter Number of shares : ');
        var amount = readline.questionInt('Enter Amount : ');

        var compInfo = {
            "CName"  :  cname,
            "CSymbol": csymbol,
            "Shares" : shares,
            "Amount" : amount
        }

        this.stockData.CompanyShare.push(compInfo);
       //stringify() convert JS value to JSON string
       //JSON : object that provide methods to convert js value to or from JSON format
        this.saveData();
     }

     buyShares(user){
        var j=1;
        console.log('  Company Name \t\tAvailable Shares');
    
        for (let i = 0; i < this.stockData.CompanyShare.length; i++) {
            console.log(j+++'. '+this.stockData.CompanyShare[i].CName+' \t\t\t '+this.stockData.CompanyShare[i].Shares);
        }
        var ch = readline.questionInt('Enter which company share you want to purchase : ');
        if (ch > this.stockData.CompanyShare.length) {
            console.log('Choose valid company..');
            ch = readline.questionInt('Enter which company share you want to purchase : ');
        }
        var amount = readline.questionInt('Enter Amount : ');
        
        if (amount > this.stockData.CompanyShare[ch-1].Shares ) {
            console.log('Amount should be less than available shares');
        }
        else{
            for (let i = 0; i < this.stockData.Customers.length; i++) {
                if(user == this.stockData.Customers[i].Name){
                    this.stockData.Customers[i].Amount = this.stockData.Customers[i].Amount - amount;
                    this.stockData.Customers[i].Shares = this.stockData.Customers[i].Shares + Math.floor((amount/70));;
                    this.stockData.Customers[i].TrasactionDate = this.date;
                    this.stockData.CompanyShare[ch-1].Shares = this.stockData.CompanyShare[ch-1].Shares - Math.floor((amount/70));
                    this.stockData.CompanyShare[ch-1].Amount = this.stockData.CompanyShare[i].Amount + amount;
                }
            }
        }
        var json = JSON.stringify(this.stockData,null,2);
        fs.writeFileSync('./JSON/StockAccount.json',json);
        console.log('Buying successfully done : File updated........');
        
     }
     sellShares(user){
        var j=1;
        console.log('  Company Name ');
    
        for (let i = 0; i < this.stockData.CompanyShare.length; i++) {
            console.log(j+++'. '+this.stockData.CompanyShare[i].CName);
        }
        var ch = readline.questionInt('Enter which company share you want to purchase : ');
        if (ch > this.stockData.CompanyShare.length) {
            console.log('Choose valid company..');
            ch = readline.questionInt('Enter which company share you want to purchase : ');
        }
        var amount = readline.questionInt('Enter Amount : ');
        if (shares > this.stockData.Customers[ch-1].Shares ) {
            console.log('Shares not available in your account : ');
        }
        else{
            for (let i = 0; i < this.stockData.Customers.length; i++) {
                if(user == this.stockData.Customers[i].Name){
                    this.stockData.Customers[i].Amount = this.stockData.Customers[i].Amount + amount;
                    this.stockData.Customers[i].Shares = this.stockData.Customers[i].Shares - Math.floor((amount/70));
                    this.stockData.Customers[i].TrasactionDate = this.date;
                    this.stockData.CompanyShare[ch-1].Shares = this.stockData.CompanyShare[ch-1].Shares + Math.floor((amount/70));
                    this.stockData.CompanyShare[ch-1].Amount = this.stockData.CompanyShare[ch-1].Amount + amount;
                    break;
                }
            }
        }
        var json = JSON.stringify(this.stockData,null,2);
        fs.writeFileSync('./JSON/StockAccount.json',json);
        console.log('Shares selling done : Account updated .......');

     }

     companyList(){
        var j=1;
        console.log('  Company Name \t\tAvailable Shares');
    
        for (let i = 0; i < this.stockData.CompanyShare.length; i++) {
            console.log(j+++'. '+this.stockData.CompanyShare[i].CName+' \t\t\t '+this.stockData.CompanyShare[i].Shares);
        }
     }

     customerPortal(ch){
         switch (ch) {
             case 1:
                var flag=false;

                var name = readline.question('Enter New Customer Name : ');
                    for (let i = 0; i < this.stockData.Customers.length; i++) {
                        if (this.stockData.Customers[i].Name == name) {
                            flag=true;
                            break;  
                    }
                }
                if (flag) {
                    console.log('User already present : ');
                }else{
                    this.createAccount(name);
                }
                
                 break;
            case 2:
                var user = readline.question('\nEnter user name : ');
                var flag=false;
                for (let i = 0; i < this.stockData.Customers.length; i++) {
                    if (this.stockData.Customers[i].Name == user) {
                        flag=true;
                        break;  
                    }
                }
                if (flag) {
                    this.customerOprations(user);
                }
                else{
                    console.log('\nUser not found....');
                }
                 break;
             default:
                console.log('Invalid Option. Please try again............');      
                 break;
         }
     }

     customerOprations(user){
        var custch = readline.questionInt('\nWhat you want to do?\n1. Buy Shares\n2. Sell Shares\n3. Display Company Shares\n4. Save Data : ');
        switch (custch) {
            case 1:
                this.buyShares(user);
                break;
            case 2:
                this.sellShares(user);
                break;
            case 3:
                this.companyList();
                break;
            case 4:
                this.saveData();
                break;
           
            default:
            console.log('Invalid Option...........');
                break;
        }
     }

     companyPortal(ch){
         switch (ch) {
             case 1:
                 this.addCompanyShare();
                 console.log('Company added successfully..........');
                 break;
            case 2:
                 this.companyList();
                 
                 break;
             default:
                 break;
         }
    }

    saveData(){
            //stringify() convert JS value to JSON string
            //JSON : object that provide methods to convert js value to or from JSON format
            var json = JSON.stringify(this.stockData,null,2);
            fs.writeFileSync('./JSON/StockAccount.json',json);
    }
 }

 module.exports = {
     StockAccount
 }

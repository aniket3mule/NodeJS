const utility = require('./UtilityClass/StockAccountUtility');
const stockObj = new utility.StockAccount();
const fs = require('fs');
const readline = require('readline-sync');

class StockAccount {
    options(){
        console.log('\n\n1. Company Portal');
        console.log('2. Customer Portal');
        var ch = readline.questionInt('\nEnter your choice : ');

        switch (ch) {
            case 1:
                console.log('1. Add New Company Shares.');
                console.log('2. List Company details.');
                var comch = readline.questionInt('\nEnter your choice : ');
                stockObj.companyPortal(comch);
                this.options();
                break;
            case 2:
                var custch = readline.questionInt('\n1. New User?\n2. Registered User? : ');
                stockObj.customerPortal(custch);            
                break;
        
            default:
                console.log('Invalid option.......... please try again.......');
                break;
        }
    }
}

var obj = new StockAccount();
obj.options();
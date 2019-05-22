const utility = require('./UtilityClass/StockAccountUtility');
const stockObj = new utility.StockAccount();
const fs = require('fs');
const readline = require('readline-sync');

try {
    //Purchase shares  

    // stockObj.createAccount();
    var j=1;
    var data = fs.readFileSync('./JSON/StockAccount.json','utf8');
    var stockData = JSON.parse(data);

    console.log('  Company Name \t\tAvailable Shares');
    
    for (let i = 0; i < stockData.CompanyShare.length; i++) {
        console.log(j+++'. '+stockData.CompanyShare[i].CName+' \t\t\t '+stockData.CompanyShare[i].Shares);
    }

    var ch = readline.questionInt('Enter which company share you want to purchase : ');
    // var csymbol = stockData.CompanyShare[ch-1].CSymbol;
    // console.log(csymbol);
    
    var amount = readline.questionInt('Enter Amount : ');
    if (amount > stockData.CompanyShare[ch-1].Shares ) {
        console.log('Amount should be less than available shares');
    }
    else{
        stockObj.buyShares(ch, amount,'Shubham');
    }

    
}
catch (error) {
    console.log(error);
}
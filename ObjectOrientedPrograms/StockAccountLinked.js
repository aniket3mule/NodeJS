/*
 * Purpose     : Maintain the List of CompanyShares in a Linked List So new CompanyShares can
 *               be added or removed easily.
 * 
 * @file       : StockAccountLinked.js
 * @overview   : Maintain the List of CompanyShares in a Linked List So new CompanyShares can
 *               be added or removed easily.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 23/05/2019
 * 
 */


const fs = require('fs');
const ll = require('../DataStructurePrograms/Utility/LinkedListUtility');
const readline = require('readline-sync');

class Stock {
    constructor() {
        var data = fs.readFileSync('./JSON/StockAccount.json', 'utf8');
        this.stockData = JSON.parse(data);
        
        this.linkedlist = new ll.LinkedListNode();
    }
}
class StockLinkedList extends Stock {

    companyShare() {
            console.log("1. Add company\n2. Remove company\n3. Print list\n");
            var ch = readline.question("Enter your choice:");
            switch (ch) {
                case "1":
                    this.addCompany();
                    break;
                case "2":
                    this.removeCompany();
                    break;
                case "3":
                    this.printList();

                    break;
                default:
                    console.log("Enter valid choice");
                    break;
            }
    }

    addList() {
        for (let obj in this.stockData.CompanyShare) {
            this.linkedlist.addElement(this.stockData.CompanyShare[obj]);
        }
        this.companyShare();
    }

    addCompany() {
        var CName = readline.question("Enter the name of company    : ");
        var CSymbol = readline.question("Enter the symbol of company : ");
        var Shares = readline.questionInt("Enter the number of share   : ");
        var amount = readline.questionInt("Enter the amount of company : ");
        let newCompany = {
            "CName"   :  CName,
            "CSymbol" :  CSymbol,
            "Shares"  :  Shares,
            "Amount"  :  amount    
        }
        this.linkedlist.addElement(newCompany);
        this.saveData();
    }

    removeCompany() {
        let current = this.linkedlist.head;
        var CName = readline.question("Enter name of the company to remove:");
        while (current.data.CName != CName && current != null) {
            current = current.next;
        }
        if (current != null) {
            this.linkedlist.removeElement(current.data);
            console.log("Company removed");
        } else {
            console.log("Company not found");
        }

        this.saveData();
    }

    printList() {
        var current = this.linkedlist.head;
        while (current !== null) {
            console.log("\nName Of the company     :   " + current.data.CName);
            console.log("Symbol of the company   :   " + current.data.CSymbol);
            console.log("Number of shares        :   " + current.data.Shares);
            console.log("Amount                  :   " + current.data.Amount);
            current = current.next;
        }
        
    }

    saveData() {
    
        let current = this.linkedlist.head;
        while (current != null) {
            this.stockData.CompanyShare.push(current.data)
            current = current.next;
        }
        var json = JSON.stringify(this.stockData,null,2);
        fs.writeFileSync('./JSON/StockAccount.json',json);
        console.log(' File updated........');
        
    }
}

var stockObj = new StockLinkedList();
stockObj.addList();
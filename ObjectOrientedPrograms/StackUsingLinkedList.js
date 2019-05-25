const ll = require('../DataStructurePrograms/Utility/LinkedListUtility');
const fs = require('fs');
const linkedlist = new ll.LinkedListNode();

class StackLinkedList{
    StackLinkedList(){
        this.top = null;
        this.size = 0;
    }

    pushElement(){
        var data = fs.readFileSync('./JSON/StockAccount.json','utf8');
        var stockData = JSON.parse(data);
        stockData.TransactionHistory.forEach(element => {
            linkedlist.addElement(element)
        });
        
    }

    popElement(){
            return linkedlist.delAtEnd();
        
    }
}

module.exports = {
    StackLinkedList
}
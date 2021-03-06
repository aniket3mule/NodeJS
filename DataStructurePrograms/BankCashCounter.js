/**
 * Purpose     : Queue Class to enqueue and dequeue people to either deposit or withdraw money 
 *               and maintain the cash balance
 * 
 * @file       : BankCashCounter.js
 * @overview   : Queue Class to enqueue and dequeue people to either deposit or withdraw money 
 *               and maintain the cash balance
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
 * 
 */


 const q = require('./Utility/Queue');
 const rl =require('readline-sync');
 const que = new q.Queue();

 var cash = 10000;

 que.addElement('Aniket');
 que.addElement('Shubham');
 que.addElement('Laxman');
 que.addElement('Harish');
 que.addElement('Dhoni');
 que.addElement('Saurabh');

 var list = que.printQueue();
 console.log('Number of people in a queue: '+list);
 bankQueue();
function bankQueue(){
   // if (que.isStackEmpty()) {
   //    ch = 3;
   // }
   // else{
    var ch = rl.questionInt('\nHi '+que.frontEle()+', Welcome to the bank. \nWhat you want to do?...Press 1 or 2\n\n1: Withdraw Cash\n2: deposit cash\n');
   // }
 switch (ch) {
     case 1:
         var amount = rl.questionInt('\nEnter amount you want to withdraw : ');
         if(amount > cash){
            console.log('\nAmount not available in the bank');
            bankQueue();
         }
         else{
            cash -=amount;
            console.log('\nWithdraw successfull......\n');
            que.delItem();
            var list = que.print();
            console.log(list);
            bankQueue();
         }
         break;
     case 2:
         var amount = rl.questionInt('\nEnter amount you want to deposit : ');
         if(amount <=0){
            console.log('\nAmount should be greater then zero...');
            bankQueue();
         }
         else{
            cash +=amount;
            console.log('\ndeposit successfully......');
            que.delItem();
            var list = que.printQueue();
            console.log('\nRemaining people: '+list);
            bankQueue();
         }
         break;
         // case 3 : 
         // console.log('Stack is Empty now..........\n');
         
         // break;
     default:
            console.log('\nInvalid Option ..... Try Again...');
            bankQueue();
         break;
 }
}
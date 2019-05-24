/*
 * Purpose     : Shuffle the cards using Random method and then distribute 9 Cards to 4 
 *               Players and Print
 * 
 * @file       : DeckOfCards.js
 * @overview   : Shuffle the cards using Random method and then distribute 9 Cards to 4 
 *               Players and Print
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 24/05/2019
 * 
 */

 const u = require('./Utility');
 
 class DeckOfCards{
     cards(){
        var suits = ["Clubs","Diamonds", "Hearts", "Spades"];
        var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"];
        u.distributeCards(suits,ranks);
     }
 }

 var obj = new DeckOfCards();
 obj.cards();
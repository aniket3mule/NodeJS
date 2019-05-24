/*
 * Purpose     : Sort by Rank and maintain the cards in a Queue implemented using Linked List.
 * 
 * @file       : DeckOfCards.js
 * @overview   : Sort by Rank and maintain the cards in a Queue implemented using Linked List.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 24/05/2019
 * 
 */


 const u = require('./Utility');

cards();
 function cards(){
    var suits = ["Clubs","Diamonds", "Hearts", "Spades"];
    var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"];
    u.distributeCardsUsingLinked(suits,ranks);
 }
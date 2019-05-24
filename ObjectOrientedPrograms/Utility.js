/*
 * Purpose     : To write all logic and functions
 * 
 * @file       : Utility.js
 * @overview   : Logic for all object oriented programs
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 21/05/2019
 * 
 */
const readline = require('readline-sync');
const queue = require('../DataStructurePrograms/Utility/QUsingLinkedList');

module.exports = {

    /**********************Regular Expression Demonstration******************************** */
    regularExpression(input, name, full_name, mobile_no, date){
    String.prototype.allReplace = function(obj){
        var retstr = this;
        for (const x in obj) {
            retstr = retstr.replace(new RegExp(x,'gi'), obj[x])
            }
            return retstr;
        };
        return str = input.allReplace({'<<name>>':name, '<<full name>>':full_name, 'xxxxxxxxxx':mobile_no, '01/01/2016':date});
    },

    /**********************JSON Inventory Data Management of Rice, Pulses and Wheats******************************** */

    inventory(data){
        var ch = readline.questionInt('Enter What you want to Purchease :\n1.Rice\n2.Wheat\n3.Pulses\n');

        switch (ch) {
            case 1:
                var brand = readline.questionInt('Enter which Rice you want : \n1.'+data.Inventory[0].Rice[0].Name+ 
                '\t'+data.Inventory[0].Rice[0].price+'/-Rs per KG..\n2.'+data.Inventory[0].Rice[1].Name+
                '\t'+data.Inventory[0].Rice[1].price+'/-Rs per KG..\n');
                var quantity = readline.questionInt('Enter Quantity in KG : ');
                console.log(quantity*data.Inventory[0].Rice[brand-1].price+'/-Rs for '+quantity+'KG');
                break;
            case 2:
                var brand = readline.questionInt('Enter which Wheat you want : \n1.'+data.Inventory[0].Wheat[0].Name+ 
                '\t'+data.Inventory[0].Wheat[0].price+'/-Rs per KG..\n2.'+data.Inventory[0].Wheat[1].Name+
                '\t'+data.Inventory[0].Wheat[1].price+'/-Rs per KG..\n');
                var quantity = readline.questionInt('Enter Quantity in KG : ');
                console.log(quantity*data.Inventory[0].Wheat[brand-1].price+'/-Rs for '+quantity+'KG');
                break;
            case 3:
                var brand = readline.questionInt('Enter which Pulses you want : \n1.'+data.Inventory[0].pulses[0].Name+ 
                '\t'+data.Inventory[0].pulses[0].price+'/-Rs per KG..\n2.'+data.Inventory[0].pulses[1].Name+
                '\t'+data.Inventory[0].pulses[1].price+'/-Rs per KG..\n');
                var quantity = readline.questionInt('Enter Quantity in KG : ');
                console.log(quantity*data.Inventory[0].pulses[brand-1].price+'/-Rs for '+quantity+'KG');
                break;
            default:
                console.log('Invalid options. Please try again...........');
                this.inventory(data);
                break;
        }
    },

    /*********************Deck of cards Shuffle the cards using Random method and then
distribute 9 Cards to 4 Players and Print****************************************** */

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      },

      distributeCards(suits,ranks){
          var cards = [];
          var player1 = [];
          var player2 =[];
          var player3 =[];
          var player4=[];

          for (let i = 0; i < suits.length; i++) {
              for (let j = 0; j < ranks.length;j++) {
                cards.push(suits[i]+'-'+ranks[j])
              }
          }
         
          this.shuffle(cards);
          for (let i = 1; i <= 4; i++) {
            console.log('Player '+i);
            for (let j = 0; j < 9; j++) {
                var arr = new Array(cards[j]);
                console.log(arr);
            }
        }
         },

         distributeCardsUsingLinked(suits,ranks){
            var cards = [];
            var qLinkedList = new queue.QLinkedList();
             
            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < ranks.length;j++) {
                  cards.push(suits[i]+'-'+ranks[j])
                }
            }
            for (let i = 0; i < cards.length; i++) {
                this.shuffle(cards);
                qLinkedList.enQueElement(cards[i]);
            }
            for (let i = 1; i <= 4; i++) {
                console.log('Player '+i);
                for (let j = 0; j < 9; j++) {
                    var arr = new Array(qLinkedList.deQueElement());
                    arr.sort();
                    console.log(arr);
                }
            }
         }
}
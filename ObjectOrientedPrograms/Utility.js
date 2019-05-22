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


    /**********************Calculate the value of each stock and the total value********************* */

    




}
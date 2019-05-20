/**
 * Purpose     : Hashing Function to search a Number in a slot
 * 
 * @file       : HashChaining.js
 * @overview   : Hashing Function to search a Number in a slot
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 17/05/2019
 * 
 */

const l = require('./Utility/LinkedListUtility');
const rl = require('readline-sync');
const u = require('./Utility');

hashingArray();

    function hashingArray(){
        var linked_list = [];
        for (let i = 0; i < 11; i++) {
            linked_list[i] = new l.LinkedListNode();
        }
        num_ele = rl.questionInt('Enter number of element you want to add : ');
        var ele = [];

        for (let j = 0; j < num_ele; j++) {
            ele[j] = rl.questionInt('Enter elements : ' );
            var num = ele[j]%11;
            linked_list[num].orderedLinkedList(ele[j]);
        }

        for (let k = 0; k < 11; k++) {
            if(linked_list[k]!==null){
                process.stdout.write(" Array ["+k+"] : "+linked_list[k].displayList()+'\n');
            }else{
                process.stdout.write(" Array ["+k+"] = -------- "+'\n');
            }
        }

        var search = rl.questionInt('Enter Number You want to search : ');

        var linklistseach = search%11;
        var search_status = linked_list[linklistseach].searchElement(search);

        if(search_status){
            console.log('Number found in Array['+linklistseach+']');
        }
        else{
            linked_list[linklistseach].addElement(search);
            console.log('Number Added in hash linked list : ');
            for (let k = 0; k < 11; k++) {
                if(linked_list[k]!==null){
                    process.stdout.write(" Array ["+k+"] : "+linked_list[k].displayList()+'\n');
                }else{
                    process.stdout.write(" Array ["+k+"]"+'\n');
                }
              
            }
        }








}

/*
 * Purpose     : JSON Inventory Data Management of Rice, Pulses and Wheats
 * 
 * @file       : Inventory.js
 * @overview   : JSON Inventory Data Management of Rice, Pulses and Wheats
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 21/05/2019
 * 
 */


const fs = require('fs');
const utility = require('./Utility');

try {
    var sr = new stockreport.Stock();
    fs.readFile('./JSON/Inventory.json', (err, data) => {  
       if (err) throw err;
       let inventory_data = JSON.parse(data);
       console.log(inventory_data.Inventory[0]);
   });
   
   } 
   catch (error) {
       console.log(error);
   }
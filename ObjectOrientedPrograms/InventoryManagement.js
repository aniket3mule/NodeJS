/*
 * Purpose     : JSON Inventory Data Management of Rice, Pulses and Wheats
 * 
 * @file       : InventoryManagement.js
 * @overview   : JSON Inventory Data Management of Rice, Pulses and Wheats
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 21/05/2019
 * 
 */

try { 
 const fs = require('fs');
 const utility = require('./Utility')
 
 fs.readFile('./JSON/Inventory.json', (err, data) => {  
    if (err) throw err;
    let inventory_data = JSON.parse(data);
    utility.inventory(inventory_data);
});

} 
catch (error) {
    console.log(error);
}
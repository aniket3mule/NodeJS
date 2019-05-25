/*
 * Purpose     : Clinique Management Programme.
 * 
 * @file       : CliniqueManagement.js
 * @overview   : Clinique Management Programme.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 25/05/2019
 * 
 */

const readline = require('readline-sync');
const utility = require('./UtilityClass/CliniqueUtility');
const cliniqueObj = new utility.CliniqueManagementUtility();
class CliniqueManagement{
    cliniqueManagement(){
        cliniqueObj.addPatient();


    }
}

var obj = new CliniqueManagement();
obj.cliniqueManagement();
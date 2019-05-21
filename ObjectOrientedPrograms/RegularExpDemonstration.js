/*
 * Purpose     : Use Regex to replace name, full name, Mobile#, and Date with proper value.
 * 
 * @file       : RegularExpDemonstration.js
 * @overview   : Use Regex to replace name, full name, Mobile#, and Date with proper value.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 21/05/2019
 * 
 */


 const readline = require('readline-sync');
 const utility = require('./Utility');
 var input = 'Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.'

 var name = '', full_name = '', mobile_no = 0;
 var date = new  Date().toLocaleDateString();

 name = readline.question('Enter your name : ').toUpperCase();
 full_name = readline.question('Enter your full name : ').toUpperCase();
 mobile_no = readline.questionInt('Enter 10 digit mobile number : ');
 
 var output = utility.regularExpression(input, name, full_name, mobile_no, date);
 
 console.log(output);
     


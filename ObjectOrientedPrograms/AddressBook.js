/*
 * Purpose     : Create Object Oriented Analysis and Design of a simple Address Book Problem.
 * 
 * @file       : AddressBook.js
 * @overview   : Create Object Oriented Analysis and Design of a simple Address Book Problem
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 24/05/2019
 * 
 */

const readline = require('readline-sync');
const fs = require('fs');

class AddressBook{
    constructor(){
        this.data = fs.readFileSync('./JSON/AddressBook.json','utf8');
        this.addressbook = JSON.parse(this.data);
    }
    /************************Main function. Program starts with this function ******************************** */
    addressBook(){
        console.log('------------Address Book---------------');
        var ch = readline.questionInt('\nEnter your choice : \n1. Add new entry in address book.\n2. Delete entry from address book.\n3. Update details in address book.\n4. Sort address book.\n5. Print address book.\n');
        switch (ch) {
            case 1.:
                obj.addPerson();
                console.log('\nRecord saved in address book......\n');
                obj.addressBook();
                break;
            case 2.:
                obj.printAddressBook();
                var fname = readline.question('Enter first name of the person : ');
                var lname = readline.question('Enter last name of the person : ');
                obj.delPerson(fname, lname);
                console.log('Entry removed from the address book.........');
                obj.addressBook();
                break;
            case 3.:
                console.log('Which person details you want to update?');
                var fname = readline.question('Enter first name of the person : ');
                var lname = readline.question('Enter last name of the person : ');
                obj.updateDetails(fname,lname);
                obj.addressBook();
                break;
            case 4.:
                var sort = readline.questionInt('1. Sort by LastName\t2. Sort by zipcode\n');
                if (sort == 1) {
                    obj.sortByLastName();
                    obj.saveData();
                }
                if (sort == 2) {
                    obj.sortByZip();
                    obj.saveData();
                }
                break;
            
            case 5.:
                obj.printAddressBook();
                break;
            default:
                break;
        }
    }


    /****************Adding new entry in the address book. ******************************** */
    addPerson(){
        var flag = false;
        var fname    = readline.question('Enter first name : ');
        var lname    = readline.question('Enter last name : ');
        var mobileno = readline.questionInt('Enter 10 digit mobile number : ');
        var city     = readline.question('Enter City : ');
        var state    = readline.question('Enter State : ');
        var zipcode  = readline.questionInt('Enter zip code : ');
        for (let i = 0; i < this.addressbook.AddressBook.length; i++) {
            if (this.addressbook.AddressBook[i] == null) {
                continue;
            }
            if (mobileno == this.addressbook.AddressBook[i].MobileNo ) {
                flag = true;
                break;
            }
        }

        if(flag){
            console.log('\nEntry already present with this mobile number in address book, try another .........\n');
            obj.addPerson();
        }
        else{
            var newPerson  = {
                "FirstName" : fname   ,
                "LastName"  : lname   ,
                "MobileNo"  : mobileno,
                "City"      : city    ,
                "State"     : state   ,
                "ZipCode"   : zipcode
            }
            this.addressbook.AddressBook.push(newPerson);
            this.saveData();
        }
    }


    /******************Deleting entry from the address book******************* */
    delPerson(fname, lname){
        var ch = 0, flag=false ;
        for (let i = 0; i < this.addressbook.AddressBook.length; i++) {
            if (this.addressbook.AddressBook[i] == null) {
                continue;
            }
            if (fname == this.addressbook.AddressBook[i].FirstName && lname == this.addressbook.AddressBook[i].LastName) {
                ch = i;
                flag =true;
                break;
            }
        }

        if (flag) {
            delete this.addressbook.AddressBook[ch];
            this.saveData();
        }
        else{
            console.log('Entry not found in address book......'); 
        }
    }

    /*************************updating details of the person***************************************** */
    updateDetails(fname, lname){
        var flag = false;
        var arr =['MobileNo','City','State','ZipCode'];
        var arr1 =['MobileNo','City','State','ZipCode'];
        var addch =0;
        for (let i = 0; i < this.addressbook.AddressBook.length; i++) {
            if (fname == this.addressbook.AddressBook[i].FirstName && lname == this.addressbook.AddressBook[i].LastName) {
                addch = i;
                flag = true;
            }
        }
        if (flag) {
            var ch = readline.questionInt('\nEnter Which detail you want to update : \n1. MobileNo\t2. City\t3. State\t4. ZipCode\n');
            
            if(ch == 1 || ch == 4){
                arr[ch-1] = readline.questionInt('Enter '+arr[ch-1]+' : ');
                this.addressbook.AddressBook[addch][arr1[ch-1]] = arr[ch-1];
                obj.saveData();
                console.log('Entry updated ..............');
            }
            if(ch == 2 || ch == 3){
                arr[ch-1] = readline.question('Enter '+arr[ch-1]+' : ');
                this.addressbook.AddressBook[addch][arr1[ch-1]] = arr[ch-1];
                console.log('Entry updated ..............');
            }
        }
        else{
            console.log('User Not found : ');
        }
        
    }

    /*****************************Sort address book by zip code.********************************* */
    sortByZip(){
        this.addressbook.AddressBook.sort(function(a, b){
            return a.ZipCode - b.ZipCode;
        });
        this.printAddressBook();
    }

    /*****************************Sort address book by last name********************************* */
    sortByLastName(){
        this.addressbook.AddressBook.sort(function(a, b){
            return a.LastName - b.LastName;
        });
        this.printAddressBook();
    }

    /****************************Printing the address book.************************************** */
    printAddressBook(){
       var j=1;
       console.log('----------------------------------Address Book details-----------------------------------------\n');
       
       console.log('Sr.No.  First Name\tLast Name\t Mobile No.\t  City\t   State   \t ZIP code');
       for(let i=0; i< this.addressbook.AddressBook.length; i++){
           if (this.addressbook.AddressBook[i] == null) {
               continue;
           }
            console.log(j+++'.\t'+this.addressbook.AddressBook[i].FirstName
            +'\t\t '+this.addressbook.AddressBook[i].LastName 
            +'\t\t'+this.addressbook.AddressBook[i].MobileNo
            +'\t '+this.addressbook.AddressBook[i].City
            +'\t '+this.addressbook.AddressBook[i].State
            +'\t '+this.addressbook.AddressBook[i].ZipCode);
        }
    }

    /*****************************Saving data into address book.******************************* */
    saveData(){
        var json = JSON.stringify(this.addressbook,null,2);
        fs.writeFileSync('./JSON/AddressBook.json',json);
    }
}

//Creating an object of the class.
var obj = new AddressBook();
//calling function.
obj.addressBook();
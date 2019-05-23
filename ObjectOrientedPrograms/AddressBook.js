const readline = require('readline-sync');
const fs = require('fs');

class AddressBook{
    constructor(){
        this.data = fs.readFileSync('./JSON/AddressBook.json','utf8');
        this.addressbook = JSON.parse(this.data);
    }
    
    addPerson(){
        var fname    = readline.question('Enter first name : ');
        var lname    = readline.question('Enter last name : ');
        var mobileno = readline.questionInt('Enter 10 digit mobile number : ');
        var city     = readline.question('Enter City : ');
        var state    = readline.question('Enter State : ');
        var zipcode  = readline.questionInt('Enter zip code : ');

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
    delPerson(){


    }
    EditPerson(){

    }
    sortByZip(){
        this.addressbook.AddressBook.sort(function(a, b){
            return a.ZipCode - b.ZipCode;
        });
        this.printAddressBook();
    }
    sortByLastName(){
        this.addressbook.AddressBook.sort(function(a, b){
            return a.LastName - b.LastName;
        });
        this.printAddressBook();

    }

    printAddressBook(){
       var j=1;
        console.log('Sr.No.  First Name\tLast Name\t Mobile No.\t  City\t   State   \t ZIP code');
        
       for(let i=0; i< this.addressbook.AddressBook.length; i++){
            console.log(j+++'.\t'+this.addressbook.AddressBook[i].FirstName
            +'\t\t '+this.addressbook.AddressBook[i].LastName
            +'\t\t'+this.addressbook.AddressBook[i].MobileNo
            +'\t '+this.addressbook.AddressBook[i].City
            +'\t '+this.addressbook.AddressBook[i].State
            +'\t '+this.addressbook.AddressBook[i].ZipCode);
        }
    }

    saveData(){
        var json = JSON.stringify(this.addressbook,null,2);
        fs.writeFileSync('./JSON/AddressBook.json',json);
    }
}


var obj = new AddressBook();
obj.sortByLastName();
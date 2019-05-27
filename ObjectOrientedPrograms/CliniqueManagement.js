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
        
        console.log('*********************Welcome to bridgelabz Hospital********************\n');
        
        console.log('1. Add Patient \t\t 2. Add Doctor \t\t 3. Book Appointment\n4. Search Doctor \t 5. Search Patient \t 6. Show Doctors List');
        var ch = readline.questionInt('\nEnter Your Choice : \n');

        switch (ch) {
            case 1:
                cliniqueObj.addPatient();
                break;
            case 2:
                cliniqueObj.addDoc();
                break;
            case 3:
                cliniqueObj.bookAppointment();
                break;
            case 4:
                console.log('1. Search By Name \t 2. Search By Specialization\n3. Search By ID\t\t 4. Availability\n');
                var ch = readline.questionInt('Enter Your Choice : ');
                if (ch>4) {
                    console.log('Please enter valid option');
                }
                cliniqueObj.searchDoc(ch);
                break;
            case 5:
                console.log('1. Search By Name \t 2. Search By Mobile No. \t 3. Search By ID\n');
                var ch = readline.questionInt('Enter Your Choice : ');
                if (ch>4) {
                    console.log('Please enter valid option');
                }
                cliniqueObj.searchPatients(ch);

                break;
            case 6:
                cliniqueObj.showDoctors();
                break;
            default:
                console.log('\nInvalid Options...............');
                obj.cliniqueManagement();
                break;
        }
    }
}

var obj = new CliniqueManagement();
obj.cliniqueManagement();

module.exports = {
    CliniqueManagement
}
/*
 * Purpose     : Clinique Management Programme.
 * 
 * @file       : CliniqueUtility.js
 * @overview   : Clinique Management Programme.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 25/05/2019
 * 
 */

const fs = require('fs');
const readline = require('readline-sync');
const u  = require('../CliniqueManagement');
class CliniqueManagementUtility{
    constructor(){
        this.ddata = fs.readFileSync('./JSON/Doctors.json','utf8');
        this.dfile = JSON.parse(this.ddata);

        this.pdata = fs.readFileSync('./JSON/Patients.json','utf8');
        this.pfile = JSON.parse(this.pdata);

        for (let i = 0; i < this.pfile.Patients.length; i++) {
            this.pid = this.pfile.Patients[i].PID +1;
        }

        for (let i = 0; i < this.dfile.Doctors.length; i++) {
            this.docid = this.dfile.Doctors[i].DocID+1;
        }
        
    }
    /*****************Add new patient into JSON********************* */
    addPatient(){
    
        var pname  = readline.question('\nEnter patient name : ');
        var pmobile = readline.questionInt('Enter Mobile number : ');
        var page = readline.questionInt('Enter patient age : ');
        
        var patient = {
            "PName"   : pname,
            "PMobile" : pmobile,
            "PID"     : this.pid,
            "PAge"    : page
        }
        this.pfile.Patients.push(patient);
        this.savePatientData();
    }

    /*****************Add new doctor into JSON********************* */
    addDoc(){
        
        let dname  = readline.question('\nEnter Doctor name : ');
        let specialization = readline.question('Enter patient Speciality : ');
        let availability =  readline.question('Enter availability Type "AM", "PM" or "Both : ');
        
        var doctor = {
            "DoctorName"        :dname,
            "DocID"             :this.docid,
            "Specialization"    : specialization,
            "Availability"      : availability
        }
        this.dfile.Doctors.push(doctor);
        this.saveDocData();
    }

    /*****************take doctors appointment********************* */
    bookAppointment(){
        var name = '';
        var pname, tapps=0, appdocname,tAdate, key,totalapp ;
        name = readline.question('Enter Your Name : ');
        name = name + ', '
        console.log('Available Doctors : ');
        this.showDoctors();
        var ch = readline.questionInt('Choose doctor : ');
        if (ch > this.dfile.Doctors.length) {
            console.log('Enter Valid option........');
            this.bookAppointment();
        }
        var dname = this.dfile.Doctors[ch-1].DoctorName;
        
        var atime = readline.question('Enter time type AM, PM or Both  : ');
        var adate = readline.question('Enter Date in dd/mm/yyyy format  : ');

        for (let i = 0; i < this.dfile.Appointments.length; i++) {
            if (dname == this.dfile.Appointments[i].DoctorName ) {
                key =i;
                pname = name + this.dfile.Appointments[i].PName;
                tAdate = this.dfile.Appointments[i].ADate;
                appdocname = this.dfile.Appointments[i].DoctorName
                totalapp = this.dfile.Appointments[key].TotalApps
            }
            else{
                tapps = 1;
                    pname = name;
                    var appointments = {
                        "DoctorName"        : dname,
                        "ADate"             : adate,
                        "ATime"             : atime,
                        "PName"             : pname,
                        "TotalApps"         : tapps
                    }
                    this.dfile.Appointments.push(appointments);
                    this.saveDocData();
                    console.log('Appointment done.......');
                    process.exit(1); 
            }
        }
        if (this.dfile.Doctors[ch-1].Availability == atime) {
            if (totalapp  == 5 && dname == appdocname && tAdate == adate ) {
                console.log('Doctor not available, please choose another date : ');
                this.bookAppointment();
            }
            else{
                tapps =  totalapp +1;
                if (totalapp >= 5) {
                    tapps = 1;
                    pname = name;
                    var appointments = {
                        "DoctorName"        : dname,
                        "ADate"             : adate,
                        "ATime"             : atime,
                        "PName"             : pname,
                        "TotalApps"         : tapps
                    }
                    this.dfile.Appointments.push(appointments);
                    this.saveDocData();
                    console.log('Appointment done.......');
                }
                else{
                    totalapp = tapps;
                    this.dfile.Appointments[key].PName = pname;
                    this.saveDocData();
                    console.log('Appointment done.......');
                }
            }
        }
        else{
            console.log('Please Enter correct Availability ');
        }  
    }

    /*****************Search doctor by name, id , speciality********************* */
    searchDoc(ch){
        switch (ch) {
            case 1:
                var j=1, key =-1, flag = false ;
                var dname = readline.question('Enter Doctor full name : ');
                for (let i = 0; i < this.dfile.Doctors.length; i++) {
                    if (this.dfile.Doctors[i].DoctorName == dname) {
                        key = i;
                        flag = true;
                    }
                }
                if (flag) {
                    console.log('\nSr.NO. Doctor Name \t\t|Speciality \t\t|Availablity\t\t|DOC ID\n');
                    console.log(j+++'\t'+this.dfile.Doctors[key].DoctorName+'\t\t|'+this.dfile.Doctors[key].Specialization+'\t\t|'+this.dfile.Doctors[key].Availability+'\t\t\t|'+this.dfile.Doctors[key].DocID); 
                    
                }
                else{
                    console.log('Doctor not found or please check input again.........');
                    
                }
                break;
            
            case 2:
                var j=1;
                var speciality = readline.question('Enter Specialization : \n');
                console.log('\nSr.NO. Doctor Name \t\t|Speciality \t\t|Availablity\t\t|DOC ID\n');
                for (let i = 0; i < this.dfile.Doctors.length; i++) {
                    if (speciality == this.dfile.Doctors[i].Specialization) {
                        
                        console.log(j+++'\t'+this.dfile.Doctors[i].DoctorName+'\t\t|'+this.dfile.Doctors[i].Specialization+'\t\t|'+this.dfile.Doctors[i].Availability+'\t\t\t|'+this.dfile.Doctors[i].DocID); 
                    }
                    else{
                        console.log('Doctor not found or please check input again.........');
                        break;
                    }
                }
                break;
               
            case 3:
                var j=1;
                var id = readline.question('Enter Doctor ID : \n');
                for (let i = 0; i < this.dfile.Doctors.length; i++) {
                    if (id == this.dfile.Doctors[i].DocID) {
                        console.log('\nSr.NO. Doctor Name \t\t|Speciality \t\t|Availablity\t\t|DOC ID\n');
                        console.log(j+++'\t'+this.dfile.Doctors[i].DoctorName+'\t\t|'+this.dfile.Doctors[i].Specialization+'\t\t|'+this.dfile.Doctors[i].Availability+'\t\t\t|'+this.dfile.Doctors[i].DocID); 
                    }
                    else{
                        console.log('Doctor not found or please check input again.........');
                        break;
                    }
                }
                break;
            
            case 4:
                var j=1;
                var avail = readline.question('Enter Availablity Type "AM, PM, or Both" : \n');
                for (let i = 0; i < this.dfile.Doctors.length; i++) {
                    if (avail == this.dfile.Doctors[i].Availability) {
                        console.log('\nSr.NO. Doctor Name \t\t|Speciality \t\t|Availablity\t\t|DOC ID\n');
                        console.log(j+++'\t'+this.dfile.Doctors[i].DoctorName+'\t\t|'+this.dfile.Doctors[i].Specialization+'\t\t|'+this.dfile.Doctors[i].Availability+'\t\t\t|'+this.dfile.Doctors[i].DocID); 
                    }
                    else{
                        console.log('Doctor not found or please check input again.........');
                        break;
                    }
                }
                break;
            
        }

    }

    /*****************Search patients by name, id , mobile********************* */
    searchPatients(ch){
        switch (ch) {
            case 1: var j=1, key =-1, flag = false ;
            var pname = readline.question('Enter Patient Full Name : ');
            for (let i = 0; i < this.pfile.Patients.length; i++) {
                if (this.pfile.Patients[i].PName == pname) {
                    key = i;
                    flag = true;
                }
            }
            if (flag) {
                console.log('\nSr.NO. Patient Name \t\t|Mobile No. \t\t|Age\t\t|Patient ID\n');
                console.log(j+++'\t'+this.pfile.Patients[key].PName+'\t\t|'+this.pfile.Patients[key].PMobile+'\t\t|'+this.pfile.Patients[key].PAge+'\t\t|'+this.pfile.Patients[key].PID);
            }
            else{
                console.log('Patient not found or please check input again.........');
                
            }
            break;
        case 2:
            var j=1, key =-1, flag = false ;
            var pmobile = readline.question('Enter Mobile Number : ');
            for (let i = 0; i < this.pfile.Patients.length; i++) {
                if (this.pfile.Patients[i].PMobile == pmobile) {
                    key = i;
                    flag = true;
                }
            }
            if (flag) {
                console.log('\nSr.NO. Patient Name \t\t|Mobile No. \t\t|Age\t\t|Patient ID\n');
                console.log(j+++'\t'+this.pfile.Patients[key].PName+'\t\t|'+this.pfile.Patients[key].PMobile+'\t\t|'+this.pfile.Patients[key].PAge+'\t\t|'+this.pfile.Patients[key].PID);
            }
            else{
                console.log('Patient not found or please check input again.........');
                
            }
            break;

            case 3:
                var j=1, key =-1, flag = false ;
                var pid = readline.question('Enter Mobile Number : ');
                for (let i = 0; i < this.pfile.Patients.length; i++) {
                    if (this.pfile.Patients[i].PID == pid) {
                        key = i;
                        flag = true;
                    }
                }
                if (flag) {
                    console.log('\nSr.NO. Patient Name \t\t|Mobile No. \t\t|Age\t\t|Patient ID\n');
                    console.log(j+++'\t'+this.pfile.Patients[key].PName+'\t\t|'+this.pfile.Patients[key].PMobile+'\t\t|'+this.pfile.Patients[key].PAge+'\t\t|'+this.pfile.Patients[key].PID);
                }
                else{
                    console.log('Patient not found or please check input again.........');
                    
                }
                break;
        }

    }

    /********************Displays the all doctors list************************* */
    showDoctors(){
        var j=1;
        console.log('\nSr.NO. Doctor Name \t\t|Speciality \t\t|Availablity\t\t|DOC ID\n');
        for (let i = 0; i < this.dfile.Doctors.length; i++) {
            console.log(j+++'\t'+this.dfile.Doctors[i].DoctorName+'\t\t|'+this.dfile.Doctors[i].Specialization+'\t\t|'+this.dfile.Doctors[i].Availability+'\t\t\t|'+this.dfile.Doctors[i].DocID); 
        }
    }
    
    /********************Save all the data************************* */

    saveDocData(){
        var json = JSON.stringify(this.dfile,null,2);
        fs.writeFileSync('./JSON/Doctors.json',json);
    }

    savePatientData(){
        var json = JSON.stringify(this.pfile,null,2);
        fs.writeFileSync('./JSON/Patients.json',json);

    }
}

module.exports = {
    CliniqueManagementUtility
}
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
class CliniqueManagementUtility{
    constructor(){
        this.ddata = fs.readFileSync('./JSON/Doctors.json','utf8');
        this.dfile = JSON.parse(this.ddata);

        this.pdata = fs.readFileSync('./JSON/Patients.json','utf8');
        this.pfile = JSON.parse(this.pdata);

        for (let i = 0; i < this.pfile.Patients.length; i++) {
            this.pid = this.pfile.Patients[i].PID +1;
        }

        for (let i = 0; i < this.pfile.Patients.length; i++) {
            this.docid = this.dfile.Doctors[i].DocID +1;
        }
        
    }
    /*****************Add new patient into JSON********************* */
    addPatient(){
    
        var pname  = readline.question('Enter patient name : ');
        var pmobile = readline.questionInt('Enter Mobile number : ');
        var page = readline.questionInt('Enter patient age : ');
        
        var patient = {
            "PName"   :pname,
            "PMobile" :pmobile,
            "PID"     : this.pid,
            "PAge"    : page
        }
        this.pfile.Patients.push(patient);
        this.savePatientData();

    }

    /*****************Add new doctor into JSON********************* */
    addDoc(){
        
        var dname  = readline.question('Enter Doctor name : ');
        var specialization = readline.questionInt('Enter patient age : ');
        var availability =  readline.question('Enter availability Type "AM", "PM" or "Both : ');
        
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
    takeAppointment(){
        this.showDoctors();
    }

    /*****************Search doctor by name, id , speciality********************* */
    searchDoc(ch){

    }

    /*****************Search patients by name, id , mobile********************* */
    searchPatients(ch){

    }

    /********************Displays the all doctors list************************* */
    showDoctors(){

    }

    /********************Save all the data************************* */

    saveDocData(){
        var json = JSON.stringify(this.dfile);
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
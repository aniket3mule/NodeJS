/**
 * Purpose     : To write all logic and functions
 * 
 * @file       : Utility.js
 * @overview   : Logic for all Algorithm programs
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 10/05/2019
 * 
 */

 /*****************************An Anagram Detection Example********************************** */

 module.exports = {
     anagramDetection(str1, str2){
         var count=0;
         var str1 = str1.toLowerCase();
         var str2 = str2.toLowerCase();
         var res1 = str1.split('').sort();
         var res2 = str2.split('').sort();
        
         if (res1.length==res2.length) {
             var j =0 ;
             while (j<res1.length) {
                 for (let i = j; i < res1.length; i++){
                     if (res1[j]!= res2[i]) {

                         return false;
                     }
                     else{
                         j++;
                     }
                 }
             }
         }
         return true;
     },



     /****************Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range.********************************** */

     isPrime(i){
         for (let j = 2; j < i; j++) {
             if (i%j==0) {
                 return false;
             }
         }
         return true;
     },

     /******************Numbers which are angrams palindrom********************* */

     isAnagramPalindrome(primes){
         var arr = []; 
         arr = primes;
         console.log('Anagrams that are palindromes');
         
        for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (this.anagramDetection(arr[i].toString(),arr[j].toString())) {
                    if (this.isPalindrome(arr[i],arr[j])) {
                        console.log(arr[i]+'  '+arr[j]);
                    }
                }
            }
        }
    
     },


     /******************check palindromes********************* */
     isPalindrome(num1, num2) {
        var str = '';
        num1 = num1+'';
        num2 = num2+'';
        for (let i = 0; i < num1.length; i++) {
            str = num1.charAt(i) + str;

        }
        if (str == num2) {
            return true;
        }
        return false;
    },

    /******************binarySearch method for integer********************* */

    binarySearchInteger(arr, search){
        var startIndex = 0,
            stopIndex = arr.length - 1,
            middle = Math.floor((stopIndex + startIndex) / 2);


        while (arr[middle] != search && startIndex < stopIndex) {

            //adjust search area
            if (search < arr[middle]) {
                stopIndex = middle - 1;
            } else if (search > arr[middle]) {
                startIndex = middle + 1;
            }

            //recalculate middle
            middle = Math.floor((stopIndex + startIndex) / 2);
        }

        //make sure it's the right value
        if(arr[middle]==search){
            return middle;
        }
        else{
            return -1;
        }
        
    },
    
    /******************InsertionSearch method for integer********************* */

    insertionSort(arr){
        
        var starttime = process.hrtime();

        for (let i = 1; i < arr.length; i++) {
            var key = arr[i];
            var j = i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1]= key;
        }
        var endtime = process.hrtime();
        var et = this.elapsedTime(starttime, endtime);
        console.log('Elapsed time for Insertion sort is : '+et, 'milisecod');
        return arr;
    },

    /******************Bubble Sort method for integer********************* */

    bubbleSort(arr){
        var starttime = process.hrtime();
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if(arr[j]>arr[j+1]){
                    var temp;
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        var endtime = process.hrtime();
        var et = this.elapsedTime(starttime, endtime);
        console.log('Elapsed time for bubble sort is : '+et, 'milisecod');
        
        return arr;
    },



    /******************Calculating Elapsed time ********************* */
    elapsedTime(starttime, endtime){
        var startmili = (starttime[0] * 1000 + starttime[1] / 1000000);
        var endmili = endtime[0] * 1000 + endtime[1] / 1000000;
        var et = endmili - startmili; 
       return et;
    },


    /******************Merge Sort Algorithm ********************* */  
        mergesort(arr) {
            if (arr.length === 1) {
                return arr;
            }
            const m = Math.floor(arr.length / 2);
            const left = arr.slice(0, m);
            const right = arr.slice(m);
            return this.merge(this.mergesort(left), this.mergesort(right));
    
        },
    
        merge(left, right) {
            let result = [];
            let i = 0;
            let j = 0;
    
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                   result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
            return result.concat(left.slice(i)).concat(right.slice(j));
    },

    /************Find the Fewest Notes to be returned for Vending Machine********************************/

    vendingMachine(amount){
        var notes_arr = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
        var notes_counters =[];

        for (let i = 0; i < 9; i++) {
            if (amount>=notes_arr[i]) {
                notes_counters[i] = Math.floor(amount/notes_arr[i]);
                if (notes_counters[i]!=0) {
                    console.log('Number of notes of ', notes_arr[i], 'RS are ', notes_counters[i]);
                }
                amount = amount - (notes_counters[i] * notes_arr[i]);  
            }
            
        }
    },


    /******************Temperature conversion : Celsius to Fahrenheit and Fahrenheit to Celsius**************************/

    celsiusToFehrenheit(celsius){
        var f = (celsius * 9/5)+32;
        return f;
    },
    fahrenheitToCelsius(Fahrenheit){
        var c = (Fahrenheit-32) *5/9;
        return c;
    },

    /******************calculate monthlyPayment *************************/

    monthlyPayment(p,y,r){
        var payment, n;
        
        n = 12*y;
        r = r/(12*100);

        payment = ((p*r)/1-(Math.pow((1+r),-n)));
        return payment;
    },


    /******************Prints the day of the week that date falls on*************************/

    dayOfWeek(m,d,y){
        var year = (y-(Math.floor(14-m)/12));
        var x = year+Math.floor((year/4))-Math.floor((year/100))+Math.floor((year/400));
        var month = m+12 *(Math.floor((14-m)/12))-2;
        day = Math.ceil(((d+x+Math.floor(31*month/12))%7));
        return day;
    },

    /*****************compute the square root of a nonnegative number***********************/

    sqrt(t,epsilon,c){
        while(  Math.abs(t-c/t) > epsilon*t){
            t = (c/t + t)/2.0;
        }
        return t;
    },


    /******************Binary representation of the decimal number*************************/

    decimalToBinary(dec){
        var d = [],i=0; 
        
        while(dec>0){
            d[i] = parseInt(Math.floor(dec%2));
            dec = parseInt(dec/2);
            i++;
        }
        return d;
    }



 }
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

    binarySearchInteger(arr, num){
        var left = 0;
        var right = arr.length-1;
        var arr1 = this.insertionSort(arr);
        var num1 = parseInt(num);

        arr1.forEach(element => {
            console.log(element);
            
        });
        var left = 0;
        var right = arr1.length-1;
        var mid = Math.floor((left + right)/2);
       
        while(left<right){
           
            if (arr1[mid]== num1) {
                return mid;
                
            }
            else{
                if (arr1[mid]<num1) {
                    left = mid-1;
                }
                if (arr1[mid]>num1) {
                    right = mid+1;
                }
            }
        }
        return -1;
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


     sort( arr, l, r) { 
        if (l < r) { 
            
            var mid = (l+r)/2; 
  
            // Sort first and second halves 
            this.sort(arr, l, mid); 
            this.sort(arr , mid+1, r); 
  
            // Merge the sorted halves 
            this.mergeSort(arr, l, mid, r); 
        } 
    }, 

    mergeSort(arr, l, mid, r){
        //finding length of the two subarray;
        var l1 = mid - l + 1;
        var l2 = r - mid;

        var list1 = [];
        var list2 =[];
        var list3 = [];

        //Copy data of two list into temp 
        for (let i = 0; i < l1; i++) {
            list1.push(arr[l+1]);            
        }

        list1.forEach(element => {
            console.log(element);
        });

        for (let j = 0; j < l2; j++) {
            list2.push(arr[mid+1+j])            
        }
        
        var i=1, j=1,k=1;

        while(i<=l1 && j<=l2) {
            if(list1[i]<=list2[j]){
                list3.push(list1[i++]); 
            }
            else{
                list3.push(list2[j++]);
            } 
            k++;
        }
        for(; i<l1;i++){
            list3.push(list2[i]);
        }
        
       for(; j<l2;j++){
            list3.push(list2[j]);
        }
       for (let m = 0; m < list3.length; m++) {
           console.log(list3);
           
       }
    }

    /********************************************/


    
 }
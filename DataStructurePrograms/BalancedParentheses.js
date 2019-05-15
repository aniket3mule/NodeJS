/**
 * Purpose     : True or False to Show Arithmetic Expression is balanced or not.
 * 
 * @file       : BalancedParentheses.js
 * @overview   : True or False to Show Arithmetic Expression is balanced or not.
 * @author     : Aniket Mule
 * @version    : v8.10.0
 * @since      : 15/05/2019
 * 
 */


const su = require('./Utility/StackUtility');
const rl = require('readline-sync');
const st = new su.Stack();

var exp;

exp = rl.question('Enter Arithmatic Expression : ');

for (let i = 0; i < exp.length; i++) {
    if(exp[i] == '('){
        st.pushItem('(');
    }
    if(exp[i]==')'){
        st.popItem();
    }
}

if (st.isEmpty()) {
    console.log('The given expression is balanced : ');
}
else{
    console.log('The given expression is not balanced : ');
}
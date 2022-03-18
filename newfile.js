var input = require('input');
function requirejs (module,variable) {
var variable = require(module);
}

 function log (argument) {
 if (typeof (argument)== "string") {
 console.log((argument).split('null').join('nulla'));
 
 } else {
 console.log(argument);
 }

 }
 //HERE ARE SOME EXAMPLES

//Variables
const constttt = 10; //constant
//or
let a = 10; //variable
//or
let c = "yo"; //variable
//or
var p = "I am global"; //var is var


//Data types
let k = true;
let b = false;
let n = null; //null
let d = undefined; //undefined
let t =  undefined; //undefined

//Console log
log(k);

//Condition
let gullu = 10;
if (gullu < 25) {
log("gullu is less than 25");
} 
else if(gullu == 100){
 log("gullu tu bada bhai hai");

}
else {
log("gullu is greater than or equal to 25");
}

//Loop

let looper = 0;
while (looper < 10) {
looper += 1;
if (looper == 5) {
log("andar se bol bhai ", looper);
continue;
}
if (looper == 6) {
break;
}
log(looper);
}
log("done");

//Require a module
requirejs('fs','filesystem');

//typeof
log(typeof 'string');

//Switch case
switch (a) {
 case "morning":
 drink = "Tea";
 break;
 case "evening":
 drink = "Shake";
 break;
 default:
 drink="Water";
 }


//Function 
function suna(){
 log('kaisa hai sab kuch');
}

 suna(); //function call


//Set time out
function wait(){
 log(' ');

 log('ye der se aya na, kyunki time out hai');
}
 setTimeout(wait, 5500);



//Array
log( [1,2,3])


//Take user input

async function age(){
 let age = await input.text('what is your age')
 if(age<30){
 log('aap to young ho bhai')
 } else {
 log('age is just a number bhai')
 }
}

 age();


//return
return(100);
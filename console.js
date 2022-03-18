#! /usr/bin/env node



var fs = require('fs');
var input = require('input');
const { interpret } = require("./devutilities");
// console.log(process.argv);
let loc = process.argv[2];
let codeRead = fs.readFileSync(loc,
            {encoding:'utf8', flag:'r'});
 
// Display the file data
// console.log(kk);
//required string
  codeRead =
    `var input = require('input');
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
 ` + codeRead;

//Interpretor
//Cleaning string
 codeRead = codeRead.replace(/ +(?= )/g, "");



// function interpret (bhailang,js) {
// kk = kk.split(bhailang).join(js);
// // console.log(kk);
// }
//Bhai lang Interpretor
interpret(codeRead, "bhai ye hai", "let");
interpret(codeRead, "sun bhai", "let");

interpret(codeRead, "nalla",null);
interpret(codeRead, "sahi",true);
interpret(codeRead, "galat",false);
interpret(codeRead, "bol bhai(","log(");
interpret(codeRead, "bol bhai (","log(");

interpret(codeRead,"agar bhai",'if');
interpret(codeRead,"warna bhai",'else');

interpret(codeRead,"jab tak bhai",'while');

interpret(codeRead,"agla dekh bhai","continue");
interpret(codeRead,"bas kar bhai","break");
interpret(codeRead,"dena bhai(","requirejs(");
interpret(codeRead, "dena bhai (", "requirejs(");


//Input from cli
interpret(codeRead,"bata bhai",'async function');
interpret(codeRead,"bhai puch",'await input.text');
interpret(codeRead,"bhai tick",'await input.checkboxes');

//


//Try catch
interpret(codeRead,"try kar bhai",'try');
interpret(codeRead,"pakad bhai",'catch');
interpret(codeRead,"sab theek hai bhai",'finally');
interpret(codeRead,"array bhai",'');


interpret(codeRead,"pata nai bhai",'undefined');
interpret(codeRead,"ya fir bhai","else if");
interpret(codeRead,"nikal bhai","return");
interpret(codeRead,"pakka ye hai","const");
interpret(codeRead,"bhai ek kaam kar","function");
interpret(codeRead,"ye kar bhai","");

interpret(codeRead,"bhai thoda ruk"," setTimeout");
interpret(codeRead,"kuch nahi"," undefined");

//



// switch case


// console.log(kk);
interpret(codeRead,"bhai dekh","switch");
interpret(codeRead,"agar","case");
interpret(codeRead,"nhi to","default");
interpret(codeRead,"kaisa hai bhai","typeof");
interpret(codeRead,"naya bana bhai","new");
interpret(codeRead,"chal bhag bhai","delete");
interpret(codeRead,"vella","var");

interpret(codeRead,"hi bhai","");
interpret(codeRead,"bye bhai","");

// console.log(kk);



//

// writeFile function with filename, content and callback function
fs.writeFile('newfile.js', codeRead, function (err) {
  if (err) throw err;
  // console.log('File is created successfully.');
  require('child_process').fork('newfile.js'); //change the path depending on where the file is.

//  const { fork } = require("child_process");

// const child = fork("newfile.js");

// console.log("main process is still running...");

// child.on("close", function (message) {
//   // console.log("child process exited with message " + message);
// });


});

function log (argument) {
  let evaluated = eval('2 + 2');
interpret("null",'nulla');
console.log(evaluated);

}



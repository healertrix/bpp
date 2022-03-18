#! /usr/bin/env node



var fs = require('fs');
var input = require('input');

// console.log(process.argv);
let loc = process.argv[2];
let kk = fs.readFileSync(loc,
            {encoding:'utf8', flag:'r'});
 
// Display the file data
// console.log(kk);
//required string
 kk = `var input = require('input');
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
 `+ kk;

//Interpretor
//Cleaning string
 kk = kk.replace(/ +(?= )/g,'');



function interpret (bhailang,js) {
kk = kk.split(bhailang).join(js);
// console.log(kk);
}
//Bhai lang Interpretor
interpret("bhai ye hai","let");
interpret("sun bhai","let");

interpret("nalla",null);
interpret("sahi",true);
interpret("galat",false);
interpret("bol bhai(","log(");
interpret("bol bhai (","log(");

interpret("agar bhai",'if');
interpret("warna bhai",'else');

interpret("jab tak bhai",'while');

interpret("agla dekh bhai","continue");
interpret("bas kar bhai","break");
interpret("dena bhai(","requirejs(");
interpret("dena bhai (","requirejs(");


//Input from cli
interpret("bata bhai",'async function');
interpret("bhai puch",'await input.text');
interpret("bhai tick",'await input.checkboxes');

//


//Try catch
interpret("try kar bhai",'try');
interpret("pakad bhai",'catch');
interpret("sab theek hai bhai",'finally');
interpret("array bhai",'');


interpret("pata nai bhai",'undefined');
interpret("ya fir bhai","else if");
interpret("nikal bhai","return");
interpret("pakka ye hai","const");
interpret("bhai ek kaam kar","function");
interpret("ye kar bhai","");

interpret("bhai thoda ruk"," setTimeout");
interpret("kuch nahi"," undefined");

//



// switch case


// console.log(kk);
interpret("bhai dekh","switch");
interpret("agar","case");
interpret("nhi to","default");
interpret("kaisa hai bhai","typeof");
interpret("naya bana bhai","new");
interpret("chal bhag bhai","delete");
interpret("vella","var");

interpret("hi bhai","");
interpret("bye bhai","");


// console.log(kk);



//

// writeFile function with filename, content and callback function
fs.writeFile('newfile.js', kk, function (err) {
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



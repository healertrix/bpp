/*jshint esversion: 6 */
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


// saman mangwa bhai('http://www.google.com',ye kar bhai (error, response, body){

// bol bhai('body:' body);
// agar bhai(error){
//   bol bhai(error);
// }

//   })



// var Promise = require('promise');
 
var promise = new Promise(function (resolve, reject) {
  get('http://www.google.com', function (err, res) {
    if (err) reject(err);
    else resolve(res);
  });
});


let myPromise = new Promise(function(vaada_pura, jhuta_vaada) {
// "Producing Code" (May take some time)

  let x = 0;


  if (x == 0) {
    vaada_pura("Ha bhai x= 0 hai");
  } else {
    jhuta_vaada("nahi bhai x=0 nahi hai");
  }

});


a = `

    bhai ye hai mera_vaada = naya vaada(ek kaam kar bhai(vaada_pura,jhuta_vaada){
  bhai ye hai x = 0;


  agar bhai (x == 0) {
    vaada_pura("Ha bhai x= 0 hai");
  } warna bhai {
    jhuta_vaada("nahi bhai x=0 nahi hai");
  }



}
    )



`;

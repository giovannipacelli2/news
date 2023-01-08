'use strict'

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';

/*-------------------------DOMS-ELEMENTS---------------------------*/

export function createButton(text) {
  let button = document.createElement('BUTTON');
  button.classList.add( "button" );
  button.setAttribute("type", "button");
  button.textContent = text;

  return button;
}

/*-------------------------Error-handlers--------------------------*/

export function forErrors(error){
    if (error.response) {

        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

      } else if (error.request) {
        console.log(error.request);
    } else {
      throw error;
    }
    console.log(error.config);  
}

/*-----------------------Exstract-Obj-Property---------------------*/

// This function returns an array from the OBJ values in a specific ORDER
// If a specific property doesn't exists, it puts a "" in the result array

//Example:

// obj { surname:"Rossi", age: 20, name:"Mario" }
// order [ "name", "surname", "age" ]

// result [ "Mario", "Rossi", 20 ]

export function exstractProperty(obj, order) {
  let arrRes = [];

  for ( let prop of order ) {
    if( obj[prop] ){
      arrRes.push( obj[prop] );
    }
    else {
      arrRes.push( "" );
    }
  }

  return arrRes;

}

/*------------------------Get-RANGE-of-array-----------------------*/

// Supplying the START, END values this function returns a portion of that array

export function getArrayRange(array, start, end) {     
  let newArr = _.slice(array, start, end );

  return newArr;
}


/*-------------------------Request-functions-----------------------*/

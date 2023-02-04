'use strict'

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';

/*---------------------------------------------------DOM-ELEMENTS--------------------------------------------------*/

// Create simple button
// have 2 arguments

// text = desired text in button
// OPTIONAL - cssClass = The CSS class to associate with the button

export function createButton(text, cssClass=false) {
  let button = document.createElement('BUTTON');

  if (cssClass) button.classList.add( cssClass );
  
  button.setAttribute("type", "button");
  button.textContent = text;

  return button;
}

/*----------------------------To-Top-button------------------------*/

// Create a scroll up button from a DOM element

export function toTopButton(button) {

  // Ensures that the animation is done one time
  let control = true;

  button.onclick  = ()=> { 
    window.scrollTo(0,0);     
  };

  button.style.display = "none";

  window.onscroll = ()=> {

    let scroll = window.innerHeight;

    if ( window.pageYOffset > scroll && control  ) {
      OPACITY.in(button, "0.85");
      control = false;
    } 
    else if ( window.pageYOffset <= scroll && !control ) {
      OPACITY.out(button);
      control = true;
    } 
  };
}

/*---------------------------basic-animation-----------------------*/

const OPACITY = {

  in : function(elem, opacity) {

      elem.style.display = "";
      elem.style.opacity = "0";
      elem.style.transition = "opacity 0.8s";  

      setTimeout( ()=>{ 
          elem.style.opacity = opacity; 
      }, 50 );
  },

  out : function(elem) {

      elem.style.transition = "opacity 0.8s";  

      elem.addEventListener('transitionend', none);

      function none() { 
        elem.style.display = "none";
        elem.removeEventListener('transitionend', none);
      }

      setTimeout( ()=>{ 
          elem.style.opacity = "0"; 
      }, 50 );

      

  }
}

/*-------------------------------------------------OBJECT-FUNCTIONS------------------------------------------------*/


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

/*--------------------------------------------------NETWORK-REQUEST------------------------------------------------*/


/*------------------------Get-simple-request-----------------------*/

// Uses AXIOS

export async function getSimpleRequest(url){

  return new Promise( function(resolve, reject) {
      axios.get( url, {
          params:{}
      })

      .then( (res) => { resolve(res) } )

      .catch( (err)=> { 
          console.log(err.message);
          reject(err);
      } );
  });
}
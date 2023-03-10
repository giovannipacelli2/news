'use strict'

import _ from 'lodash';

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
    setTimeout(()=>{
      window.scrollTo(0,0);     
      button.blur();
    },300);
  };

  button.style.display = "none";

  window.onscroll = ()=> {

    let scroll = window.innerHeight;

    if ( window.pageYOffset > scroll && control  ) {
      opacityTransion(button, "to-top-opacity", "normal");
      control = false;
    } 
    else if ( window.pageYOffset <= scroll && !control ) {
      opacityTransion(button, "to-top-opacity", "reverse");
      control = true;
    } 
  };
}

/*---------------------------basic-animation-----------------------*/

// Basic animation based on: an element, css class that must have animation, 
// an optional argument: direction

export function opacityTransion(elem, cssClass, direction="normal") {

  elem.style.display = "";
  elem.style.animationDirection = direction;
  elem.classList.add(cssClass);
  
  elem.onanimationend = ()=>{

    elem.classList.remove(cssClass);
    elem.onanimationend = null;

    if (direction == "reverse") elem.style.display = "none";
  };
  
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
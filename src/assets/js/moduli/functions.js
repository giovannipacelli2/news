/*-----------------------Document-Elements------------------------*/

export function getPageElement(elem) {
    return document.body.querySelector(elem);
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

/*-------------------------Request-functions-----------------------*/



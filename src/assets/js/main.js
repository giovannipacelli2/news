'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-----------------------Import-functions.js-----------------------*/

import  * as library  from './moduli/functions.js';


let baseUrl = 'https://hacker-news.firebaseio.com/v0/';
let newStories = 'newstories.json';
const NEWS_LIMIT = 10;

getRequest( baseUrl + newStories );

/*-------------------Internal-Function-Declaration-----------------*/

function getRequest(url){

    axios.get( url, {
        params:{
            print: 'pretty',
        }
    })
    .then((response) => {
        console.log(response);
    }
        
    )
    .catch( (err) => {
        library.forErrors(err);
    } );
}
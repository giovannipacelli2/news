'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-----------------------Import-functions.js-----------------------*/

import  * as library  from './moduli/functions.js';
import Notice from './moduli/notice.js';


let baseUrl = 'https://hacker-news.firebaseio.com/v0/';
let newStories = 'newstories.json';
const NEWS_LIMIT = 10;

let seeNews = 0;

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

        let news = getNotice(response.data, seeNews, NEWS_LIMIT);
        seeNews = news.length;

        writeNotice(news);
    }
        
    )
    .catch( (err) => {
        library.forErrors(err);
    } );
}

function writeNotice(news) {
    for ( let notice of news ) {
        
    }

}

function getNotice( arr, start, limit ) {

    return _.slice(arr, start, limit)
}
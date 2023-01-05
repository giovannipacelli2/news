'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-----------------------Import-functions.js-----------------------*/

import  * as library  from './moduli/functions-library.js';
import  * as newsLibrary  from './moduli/news-function-library.js';
import { Notice, GenericalNews, Story, Comment, Job } from './moduli/notice.js';


let baseUrl = 'https://hacker-news.firebaseio.com/v0/';
let newStories = 'newstories.json';

let newStoriesId = null;

const NEWS_LIMIT = 5;

let seeNews = 0;

main();

async function main(){

    try {
        let response = await newsLibrary.getRequest( baseUrl + newStories );
        newStoriesId = response.data;

        let nNotice = newsRangeLimit(response.data);

        let arrayNews = await newsLibrary.getNoticeById( baseUrl, nNotice );

        let container = document.body.querySelector(".cards-container");

        newsLibrary.writeNotice(arrayNews, container);   /* write in HTML Document */

        let button = createButton("...vedi altro...");

        container.append(button);

        button.addEventListener( 'click', seeMore );
        
    }
    catch(err) {
        library.forErrors(err); 
    }
}



/*------------------------------------Internal-Function-Declaration-----------------------------------*/


/*-----------------------Get-LIMIT-for-the-IDs---------------------*/

function newsRangeLimit(idArray) {     /* raggrupa 10 ID da tutte le news */
    let news = _.slice(idArray, seeNews, ( seeNews + NEWS_LIMIT) );
    seeNews = news.length;

    return news;
}

/*------------------------Get-id-of-more-news----------------------*/

async function seeMore(e) {     /* raggrupa 10 ID da tutte le news */

    let newsIds = newsRangeLimit(newStoriesId); /* get the array of id */

    let moreNews = await newsLibrary.getNoticeById( baseUrl, newsIds );
    console.log(moreNews);
    
    let container = document.body.querySelector(".cards-container");

    newsLibrary.writeNotice(moreNews, container);   /* write in HTML Document */

    container.append(this);
}

/*---------------------------CREATE-BUTTON-------------------------*/

function createButton(text) {
    let button = document.createElement('BUTTON');
    button.classList.add( "btn", "btn-warning","button" );
    button.setAttribute("type", "button");
    button.textContent = text;

    return button;
}
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

const NEWS_LIMIT = 10;

let seeNews = 0;

main();

async function main(){

    try {
        let response = await newsLibrary.getRequest( baseUrl + newStories );
        newStoriesId = response.data;

        let nNotice = seeMore(response);

        let arrayNews = await newsLibrary.getNoticeById( baseUrl, nNotice );

        let container = library.getPageElement(".cards-container");

        newsLibrary.writeNotice(arrayNews, container);   /* write in HTML Document */     
        
    }
    catch(err) {
        library.forErrors(err); 
    }
}



/*------------------------------------Internal-Function-Declaration-----------------------------------*/


/*------------------------Get-id-of-more-news----------------------*/

function seeMore(response) {
    let news = _.slice(response.data, seeNews, NEWS_LIMIT);
    seeNews = news.length;

    return news;
}
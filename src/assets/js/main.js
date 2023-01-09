'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-----------------------Import-functions.js-----------------------*/

import  * as library  from './moduli/functions-library.js';
import  * as newsLibrary  from './moduli/news-function-library.js';
import { Notice, GenericalNews, Story, Comment, Job } from './moduli/notice.js';

let baseUrl = 'https://hacker-news.firebaseio.com/v01/';
let newStories = 'newstories.json';

let newStoriesId = null;    // All news ID
let mainStories = null;     // First block of news printed

const NEWS_LIMIT = 10;  // commands the limit of printed news

let seeNews = 0; // number of seen news

main();

async function main(){

    try {

        let container = document.body.querySelector(".cards-container");

        // Create loading animation during loading news
        let loading = takeTime();
        container.before(loading);

        // Call the master request for News list to Hacker News and stores it in a global variable
        let response = await newsLibrary.getRequest( baseUrl + newStories );
        newStoriesId = response.data;

        // Gets a range for the News list from NEWS_LIMIT var
        // Store number of seen news
        let nNotice = library.getArrayRange(response.data, seeNews, ( seeNews + NEWS_LIMIT));
        seeNews += NEWS_LIMIT;

        // Makes the request to Hacker News API for each ID
        let arrayNews = await newsLibrary.getNoticeById( baseUrl, nNotice );

        // Create every notice by contructor and return them
        mainStories = newsLibrary.writeNotice(arrayNews);

        loading.remove();

        // Appends in HTML with CSS animation
        await appendStories(mainStories, container);

        let button = library.createButton("...vedi altro...");

        container.after(button);

        // Manage MORE news
        button.addEventListener( 'click', seeMore );
        
    }
    catch(err) {       
        library.forErrors(err); 
    }
}



/*------------------------------------Internal-Function-Declaration-----------------------------------*/


/*----------------------Append-array-of-stories--------------------*/


async function appendStories( arrStories, father ) {

    let container = document.createElement("DIV");
    container.classList.add("container-sm", "cards-container", "elem-invisible");

    let cssProperty = window.getComputedStyle(document.documentElement);
    let timeTransition = cssProperty.getPropertyValue("--timeTransition");

    let time = +timeTransition.split('ms')[0];

    return new Promise( function( resolve, reject ) {
        for ( let story of arrStories ) {
            container.insertAdjacentHTML('beforeend',story);       
        }
        
        father.append(container);
        setTimeout( ()=> {
            container.classList.add("card-transition");

            setTimeout( ()=> {
                container.classList.remove("elem-invisible");
                container.classList.remove("card-transition");
                resolve();
            } ,time );

        } ,time);
    } );      
    
}

/*------------------------Get-id-of-more-news----------------------*/

async function seeMore(e) {

    let button = e.target;

    if ( !button.classList.contains("button") ) return;

    let container = document.body.querySelector(".cards-container");
    let loading = takeTime();
    button.after(loading);

    let newsIds = library.getArrayRange(newStoriesId, seeNews, ( seeNews + NEWS_LIMIT)); /* get the array of id */
    seeNews += NEWS_LIMIT;

    let moreNews = await newsLibrary.getNoticeById( baseUrl, newsIds );

    let stories = newsLibrary.writeNotice(moreNews);   /* write in HTML Document */

    loading.remove();

    await appendStories(stories, container);

    container.after(this);
}

function takeTime(){
    let loading = document.createElement('IMG');
    loading.src = './assets/img/loading.gif';
    loading.classList.add('loading');

    return loading;
}
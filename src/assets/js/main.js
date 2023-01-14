'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-----------------------Import-functions.js-----------------------*/

import  * as Library  from './moduli/functions-library.js';
import  * as NewsLibrary  from './moduli/news-function-library.js';
import { Notice, GenericalNews, Story, Comment, Job } from './moduli/notice.js';

let baseUrl = 'https://hacker-news.firebaseio.com/v0/';
let newStories = 'newstories.json';

let newStoriesId = null;    // All news ID
let mainStories = null;     // First block of news printed

const NEWS_LIMIT = 10;  // commands the limit of printed news

let seeNews = 0; // number of seen news -486-

let refresh = 10 * 1000;    // refresh time

await main();

setInterval(async function() {
    
    let res = await refreshNews(baseUrl, newStories, newStoriesId[0]);
    if (res) {
        newStoriesId = res;
    }
}, refresh);

async function main(){

    try {

        let container = document.body.querySelector("#main-container");

        // Create loading animation during loading news
        let loading = createLoading();
        container.before(loading);

        // Call the master request for News list to Hacker News and stores it in a global variable
        let response = await NewsLibrary.getRequest( baseUrl + newStories );
        newStoriesId = await response.data;

        // Gets a range for the News list from NEWS_LIMIT var
        // Store number of seen news
        let nNotice = _.slice(response.data, seeNews, ( seeNews + NEWS_LIMIT ));
        seeNews += NEWS_LIMIT;
        /* let nNotice = _.slice(response.data, 0, NEWS_LIMIT);
        seeNews = NEWS_LIMIT; */

        // Makes the request to Hacker News API for each ID
        let arrayNews = await NewsLibrary.getNoticeById( baseUrl, nNotice );

        // Create every notice by contructor and return them
        mainStories = NewsLibrary.writeNotice(arrayNews);

        loading.remove();

        // Appends in HTML with CSS animation
        await appendStories(mainStories, container);

        let button = Library.createButton("...vedi altro...");

        container.after(button);

        // Manage MORE news
        button.addEventListener( 'click', seeMore );
        
    }
    catch(err) {       
        NewsLibrary.forErrors(err); 
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

    let container = document.body.querySelector("#main-container");
    let loading = createLoading();
    button.after(loading);

    let newsIds;
    let remindNews = (newStoriesId.length - 1) - seeNews;

    if ( ((seeNews + NEWS_LIMIT) < newStoriesId.length ) || remindNews < NEWS_LIMIT)  {

        if ( remindNews < NEWS_LIMIT) {
            newsIds = _.slice(newStoriesId, seeNews, ( seeNews + remindNews));
            await requireMoreNews( baseUrl, newsIds, loading, container, button );
            noMoreNews( loading, container, button );
        }

        else {
            newsIds = _.slice(newStoriesId, seeNews, ( seeNews + NEWS_LIMIT));
            await requireMoreNews( baseUrl, newsIds, loading, container, button );
        }

        seeNews += NEWS_LIMIT;
        
    }

    else {
        noMoreNews( loading, container, button );
    }
}

function createLoading(){
    let loading = document.createElement('IMG');
    loading.src = './assets/img/loading_1.gif';
    loading.classList.add('loading');

    return loading;
}

async function requireMoreNews( baseUrl, newsIds, loading, container, button ) {
    return new Promise( async function( resolve,reject ){
        let moreNews = await NewsLibrary.getNoticeById( baseUrl, newsIds );

        let stories = NewsLibrary.writeNotice(moreNews);   /* write in HTML Document */

        loading.remove();

        await appendStories(stories, container);

        container.after(button);
        resolve();
    } );
}

function noMoreNews( loading, container, button ) {
    loading.remove();
    let message = document.createElement('DIV');
    message.classList.add("no-more-news");
    message.textContent = "No more news!";
    container.append(message);

    button.removeEventListener('click', seeMore);
}

async function refreshNews(baseUrl, newStories, last) {
    let container = document.body.querySelector("#main-container");

    // Call the master request for News list to Hacker News and stores it in a global variable
    let response = await NewsLibrary.getRequest( baseUrl + newStories );
    let refreshNewsIds = response.data;

    // finds the index of the latest news id since the page was loaded
    let lastNotice = _.findIndex(refreshNewsIds, function(id) { return id == last; });

    // returns the new news id array
    let refreshNews = _.slice( refreshNewsIds, 0 , lastNotice );
    
    if ( refreshNews.length > 0 ){

        let arrayNews = await NewsLibrary.getNoticeById( baseUrl, refreshNews );

        // Create every notice by contructor and return them
        let createdStories = NewsLibrary.writeNotice(arrayNews);

        // Appends in HTML with CSS animation
        let div = document.createElement('DIV');
        div.classList.add("new-news");
        container.prepend(div);
        await appendStories(createdStories, div);

        return refreshNewsIds;
    }
}
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
let mainStories = null;

const NEWS_LIMIT = 10;

let seeNews = 0;

main();

async function main(){

    try {

        let container = document.body.querySelector(".cards-container");

        let loading = takeTime();
        container.before(loading);

        let response = await newsLibrary.getRequest( baseUrl + newStories );
        newStoriesId = response.data;

        let nNotice = library.getArrayRange(response.data, seeNews, ( seeNews + NEWS_LIMIT));
        seeNews += NEWS_LIMIT;

        let arrayNews = await newsLibrary.getNoticeById( baseUrl, nNotice );

        mainStories = newsLibrary.writeNotice(arrayNews);

        loading.remove();

        await appendStories(mainStories, container);

        let button = library.createButton("...vedi altro...");

        container.after(button);

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
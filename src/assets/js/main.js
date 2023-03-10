'use strict'

/*-------------------------LIBRARY-IMPORT--------------------------*/

import _ from 'lodash';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/*---------------------------CSS-IMPORT----------------------------*/

import "../css/main.css";
import "../css/cards.css";

/*-------------------------MODULES-IMPORT--------------------------*/

import LOAD_IMG from "../img/loading_1.gif";

/* import seeComments from './modules/comments.js' */
import  * as Library  from './modules/library/functions-library.js';
import  * as NewsLibrary  from './modules/library/news-function-library.js';


/*-------------------------VAR-DECLARATION-------------------------*/

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStories = 'newstories.json';

export const PAGE = document.body.querySelector("#page");
export const MAIN_CONTAINER = document.body.querySelector("#main-container");

let newStoriesId = null;    // All news ID
let mainStories = null;     // First block of printed news, declared as global variable for future implementations

const NEWS_LIMIT = 10;  // commands the limit of printed news
const RETRY_TIMES = 2;  // Times to reload main 

let seeNews = 0; // number of seen news -486-

let refreshCicle = null;

let refreshTime = 60;  // seconds

errorOnMainRequest.retry = 0;



/*---------------------------MAIN-PROGRAM--------------------------*/

// Turn .to-top element in a scroll up button
let toTop = document.body.querySelector(".to-top");
Library.toTopButton(toTop);

await main();

/*---------------------MAIN-FUNCTION-DECLARATION-------------------*/


async function main(){
    try {
        // Create loading animation during loading news
        let loading = createLoading(LOAD_IMG);
        loading.style.marginTop = "8em";
        MAIN_CONTAINER.before(loading);

        // Call the master request for News list to Hacker News and stores it in a global variable
        let response = await NewsLibrary.getRequest( baseUrl + newStories );
        newStoriesId = await response.data;

        // Gets a range for the News list from NEWS_LIMIT var
        // Store number of seen news
        let nNotice = _.slice(response.data, seeNews, ( seeNews + NEWS_LIMIT ));
        seeNews += NEWS_LIMIT;

        // Makes the request to Hacker News API for each ID
        let arrayNews = await NewsLibrary.getNoticeById( baseUrl, nNotice );

        // Create every notice by contructor and return them
        mainStories = NewsLibrary.writeNotice(arrayNews);

        loading.remove();
        window.scrollTo(0,0);

        // Appends in HTML with CSS animation
        await NewsLibrary.animationAppendStories(mainStories, MAIN_CONTAINER);

        let button = Library.createButton("...vedi altro...", "button");
        button.id = "more-button";

        MAIN_CONTAINER.after(button);

        // Manage MORE news
        PAGE.addEventListener( 'click', seeMore );

        // update cycle for the latest news
        refreshCicle = refresh(refreshTime);      
        
        // LISTENER FOR COMMENTS
        /* PAGE.addEventListener("click", seeComments); */

    }
    catch(err) { errorOnMainRequest(err); }
}



/*------------------------------------Internal-Functions-Declaration-----------------------------------*/



/*----------------------------Get-last-News------------------------*/

function refresh(refreshTime) {

    return setInterval(async function() {
        let res;    
        try{
            res = await NewsLibrary.refreshNews(baseUrl, newStories, MAIN_CONTAINER, newStoriesId[0]);
        }
        catch(err) { 
            NewsLibrary.clearPage(PAGE, MAIN_CONTAINER);
            let msg = genericError(err); 
            if (msg) PAGE.before(msg);
        }

        if (res) {      // If there are new news, it UPDATES the news ids array
            newStoriesId = res.newsIds;
            seeNews += res.downloadedNews;
        }
    }, refreshTime * 1000);
}

/*---------------Get-id-of-more-news-and-get-the-request-----------*/


async function seeMore(e) {
    try{
        let button = e.target;

        if ( button.id !== "more-button" ) return;

        let loading = createLoading(LOAD_IMG);  // Create loading effect
        button.after(loading);

        let newsIds;
        let remainedNews = (newStoriesId.length - 1) - seeNews;

        // Check if there are news to load

        if ( ((seeNews + NEWS_LIMIT) < newStoriesId.length ) || remainedNews < NEWS_LIMIT)  {

            if ( remainedNews < NEWS_LIMIT) {

                // if the remaining news is less than NEWS_LIMITS
                // updates the range to treat

                newsIds = _.slice(newStoriesId, seeNews, ( seeNews + remainedNews));    // get array of id
                await requireMoreNews( baseUrl, newsIds, loading, MAIN_CONTAINER, button );

                // Alerts that the news are finished
                noMoreNews( loading, PAGE, MAIN_CONTAINER );
            }

            else {

                // Goes normally

                newsIds = _.slice(newStoriesId, seeNews, ( seeNews + NEWS_LIMIT));  // get array of id
                await requireMoreNews( baseUrl, newsIds, loading, MAIN_CONTAINER, button );
            }

            seeNews += NEWS_LIMIT;  // Update the number of written news
            
        }

        else {
            noMoreNews( loading, PAGE, MAIN_CONTAINER );
        }
    }
    catch(err) { 
        let msg = genericError(err); 
        if (msg) MAIN_CONTAINER.append(msg);
        throw err;
    }
}


/*--------------Do-the-request-for-news-by-newsIds-array-----------*/


async function requireMoreNews( baseUrl, newsIds, loading, mainContainer, button ) {

    return new Promise( async function( resolve,reject ){
        try{ 
            //Get request for each ID of "newsIds"
            let moreNews = await NewsLibrary.getNoticeById( baseUrl, newsIds );           
            if ( moreNews instanceof Error ) reject(moreNews);

            // stories = Array of CARDs html code 
            let stories = NewsLibrary.writeNotice(moreNews);   

            loading.remove();

            // append into container with animation
            await NewsLibrary.animationAppendStories(stories, mainContainer);
            
            mainContainer.after(button);
            resolve();
            
        }
        catch(err) { 
            let msg = genericError(err); 
            if (msg) MAIN_CONTAINER.append(msg);
            throw err;
        }
    } );

}

/*---------------------Create-loading-animation--------------------*/


function createLoading(LOAD_IMG){
    let loading = document.createElement('IMG');
    loading.src = LOAD_IMG;
    loading.id = 'loading';

    return loading;
}

/*----------------Shows-that-there-aren't-more-news----------------*/


function noMoreNews( loading, page, mainContainer ) {
    loading.remove();
    let message = document.createElement('DIV');
    message.classList.add("no-more-news");
    message.textContent = "No more news!";
    mainContainer.append(message);

    page.removeEventListener('click', seeMore);
}





/*--------------------------------------------Error-Handling-------------------------------------------*/


/*---------------------Create-error-message-DIV--------------------*/


function errorMessage() {
    let message = document.createElement('DIV');
    message.classList.add("error-message");
    message.textContent = "Qualcosa non va, prova ad aggiornare la pagina";

    return message;
}

/*-------------------Manage-error-in-MAIN-request------------------*/


function errorOnMainRequest(err) {

    clearInterval(refreshCicle);    // Removes the news update

    let message = errorMessage();   // create a message DIV

    PAGE.removeEventListener( 'click', seeMore );

    PAGE.before(message);

    if ( err instanceof NewsLibrary.NewsError ) {

        errorOnMainRequest.retry++;

        if ( errorOnMainRequest.retry <= RETRY_TIMES ) {

            setTimeout( async function(){

                message.remove();

                await main();   //retry to load main function
            }, 5000 );
        }
        else if ( errorOnMainRequest.retry > RETRY_TIMES ) {

            console.log(err.message);

            errorOnMainRequest.retry = 0;
        }
    }

    else {
        throw err;
    }
}

/*---------------------------Manage-errors-------------------------*/


function genericError(err){

    clearInterval(refreshCicle);    // Removing last news download

    let message = errorMessage();   // Create an error message

    PAGE.removeEventListener( 'click', seeMore );   // Disable more-button

    if ( err instanceof NewsLibrary.NewsError ) {
        PAGE.before(message);
        return false;
    }
    else {
        return message;
    }
}
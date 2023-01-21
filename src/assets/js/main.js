'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-------------------------MODULES-IMPORT--------------------------*/


import  * as Library  from './modules/functions-library.js';
import  * as NewsLibrary  from './modules/news-function-library.js';


/*-------------------------VAR-DECLARATION-------------------------*/

let baseUrl = 'https://hacker-news.firebaseio.com/v0/';
let newStories = 'newstories.json';

export const PAGE = document.body.querySelector("#page");
export const MAIN_CONTAINER = document.body.querySelector("#main-container");

let newStoriesId = null;    // All news ID
let mainStories = null;     // First block of printed news

const NEWS_LIMIT = 10;  // commands the limit of printed news
const RETRY_TIMES = 2;  // Times to reload main 

let seeNews = 0; // number of seen news -486-

let refreshCicle = null;

let refreshTime = 60;  // seconds

errorOnMainRequest.retry = 0;



/*---------------------------MAIN-PROGRAM--------------------------*/

/* setTimeout( async()=>{ await main() }, 5000 ); */ // FOR DEBUG

await main();


/*---------------------MAIN-FUNCTION-DECLARATION-------------------*/


async function main(){
    try {

        // Create loading animation during loading news
        let loading = createLoading();
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

        let button = Library.createButton("...vedi altro...");
        button.id = "more-button";

        MAIN_CONTAINER.after(button);

        // Manage MORE news
        PAGE.addEventListener( 'click', seeMore );

        refreshCicle = refresh(refreshTime);
        
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
        catch(err) { genericError(err); }

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

        let loading = createLoading();  // Create loading effect
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
    catch(err) { genericError(err); }
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
        catch(err) { genericError(err) }
    } );

}


/*---------------------Create-loading-animation--------------------*/


function createLoading(){
    let loading = document.createElement('IMG');
    loading.src = './assets/img/loading_1.gif';
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

    clearInterval(refreshCicle);

    let message = errorMessage();

    PAGE.removeEventListener( 'click', seeMore );

    PAGE.append(message);

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

    clearInterval(refreshCicle);

    let message = errorMessage();

    PAGE.removeEventListener( 'click', seeMore );

    PAGE.append(message);
    throw err;
}
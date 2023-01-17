'use strict'

import  * as Library  from './functions-library.js';
import Notice from './notice.js';
import { MAIN_CONTAINER } from '../main.js';

export class NewsError extends Error{
    constructor(message){
        super(message);
    }
}

/*------------------------Get-simple-request-----------------------*/

export async function getRequest(url){

    return new Promise( function(resolve, reject) {
        axios.get( url, {
            params:{
                print: 'pretty',
            }
        })
        .then( (res) => { resolve(res) } )
        .catch( (err)=> { 
            console.dir(err);
            forErrors(err, MAIN_CONTAINER) 
        } );
    });
}


/*-----------------------Get-news-by-array's-id--------------------*/

export async function getNoticeById(baseUrl, news) {
    let arrNews = [];

    let requests = news.map((id)=> {
        let url = baseUrl + 'item/' + id + '.json';
        return axios.get( url );
    });

    return new Promise( function(resolve, reject) {

        Promise.all(requests)   /* Get request for each ID */
        .then((responses) => {
            responses.forEach((response) => {
                arrNews.push(response.data);
            });
        })
        .then( () => { resolve(arrNews) } )
        .catch( (err)=> { resolve(forErrors(err, MAIN_CONTAINER)) } );;
    });
}

/*-----------------------Write-NEWS-in-DOCUMENT--------------------*/

export function writeNotice(news, container=false){

    try{
        let res = [];

        for ( let data of news ) {

            let notice = null;
            let property = null;

            // Creates CARD

            property = Library.exstractProperty(data, Notice.argumentsOrder);

            notice = new Notice(...property);

            let card = notice.createCard();

            if (container) {
                container.insertAdjacentHTML('beforeend',card);
            } else {
                res.push(card);     // Array of CARDs html code
            }

        }

        if (!container) {
            return res;     // If there isn't "container" argument, it returns RES array 
        }
    } catch(err){
        throw new NewsError(err);
    }
}

/*-------------------Requires-the-latest-news-update---------------*/


export async function refreshNews(baseUrl, newStories, mainContainer, last) {

    // Call the master request for News list to Hacker News and stores it in a global variable
    let response = await getRequest( baseUrl + newStories );
    let refreshNewsIds = response.data;

    // finds the index of the latest news id since the page was loaded
    let lastNotice = _.findIndex(refreshNewsIds, function(id) { return id == last; });

    // returns the new news id array
    let refreshNews = _.slice( refreshNewsIds, 0 , lastNotice );
    
    if ( refreshNews.length > 0 ){

        let arrayNews = await getNoticeById( baseUrl, refreshNews );

        // Create every notice by contructor and return them
        let createdStories = writeNotice(arrayNews);

        // Appends in HTML with CSS animation
        let div = document.createElement('DIV');
        div.classList.add("new-news");
        mainContainer.prepend(div);
        await animationAppendStories(createdStories, div);

        // returns an OBJ with updated ids array and the NUMBER of downloaded news
        return {
            newsIds : refreshNewsIds,
            downloadedNews: refreshNews.length
        };
        
    }
}

/*-----------------Append-stories-with-CSS-Animation---------------*/


export async function animationAppendStories( arrStories, father ) {

    let container = document.createElement("DIV");
    container.classList.add("container-sm", "cards-container", "elem-invisible");

    let cssProperty = window.getComputedStyle(document.documentElement);
    let timeTransition = cssProperty.getPropertyValue("--timeTransition");
    let time = +timeTransition.split('ms')[0];  // get the value of time transition as NUMBER

    return new Promise( function( resolve, reject ) {

        // Insert every story in INVISIBLE CONTAINER
        for ( let story of arrStories ) {
            container.insertAdjacentHTML('beforeend',story);       
        }
               
        father.append(container);
        setTimeout( ()=> {
            // CSS ANIMATION
            container.classList.add("card-transition");

            setTimeout( ()=> {
                // CSS ANIMATION
                container.classList.remove("elem-invisible");
                container.classList.remove("card-transition");
                resolve();
            } ,time );

        } ,time);
    } );      
    
}

/*--------------------------Get-one-element------------------------*/

export async function printElement(baseUrl, id, container=false) {
    let url = baseUrl + 'item/' + id + '.json';

    return new Promise( function(resolve, reject) {

        axios.get( url, {
            params:{
                print: 'pretty',
            }
        })
        .then((response) => {
            let elem = writeNotice([response.data], container);
            resolve(elem);
        })
        .catch( (err)=> { forErrors(err, MAIN_CONTAINER) } );;
    });
}

/*---------------------------------------Error-MANAGEMENT---------------------------------------*/



export function forErrors(error, container){

    let loading = document.body.querySelector(".loading");
      if ( loading ) {
          loading.remove();
      }

      if (error.response) {
  
          errorPage(error.response.status, error.response.statusText, container);
          return error;
  
        } else if (error.request) {

            if ( !error.request.status && !error.request.statusText ){
                errorPage("", error.message, container);
            }
            else {
                errorPage(error.request.status, error.request.statusText, container);
            }
            return error;
            
      } else {
        throw error;
      }
      /* console.log(error.config);  */ 
  }

/*-------------------------Manage-error-page-----------------------*/

  export function errorPage(status, statusText, container) {

    container.innerHTML = "";
    window.scrollTo(0,0);

    let text = "";

    if ( status == "404" ) {
        text = "Page ";
    }

    let html = `
        <div>
            <h1 style ='text-align:center'>Error ${status}</h1>
            <span style ='font-size:1.2em' >Something gone wrong: <span style ='color:red'>${text}${statusText}</span></span>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', html);

  }
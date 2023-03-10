'use strict'

import axios from 'axios';

import  * as Library  from './functions-library.js';
import Notice from '../classes/notice.js';

import { PAGE } from '../../main.js';
import { MAIN_CONTAINER } from '../../main.js';

export class NewsError extends Error{
    constructor(message){
        super(message);
    }
}

/*-----------------------Function-CLEAR-PAGE-----------------------*/

export function clearPage( page, container) {
    page.innerHTML = "";
    page.append(container);
    container.innerHTML = "";
    window.scrollTo(0,0);
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
            console.log(err.message);
            forErrors(err, PAGE, MAIN_CONTAINER);
            reject(err);
        } );
    });
}


/*-----------------------Get-news-by-array's-id--------------------*/

export async function getNoticeById(baseUrl, news) {
    let arrNews = [];

    if ( !news ) return null;

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
        .catch( (err)=> { reject(forErrors(err, PAGE, MAIN_CONTAINER)) } );;
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

            let card = notice.exportHtmlElement();

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
        clearPage(PAGE, MAIN_CONTAINER);
        throw new NewsError(err);
    }
}

/*-------------------Requires-the-latest-news-update---------------*/


export async function refreshNews(baseUrl, newStories, mainContainer, last) {

    // Call the master request for News list to Hacker News
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


export async function animationAppendStories( arrStories, father, where='beforeend' ) {

    let container = document.createElement("DIV");
    container.classList.add("container-sm", "cards-container");

    return new Promise( function( resolve, reject ) {

        for ( let story of arrStories ) {
            container.insertAdjacentHTML(where, story);       
        }
               
        father.append(container);
        // CSS ANIMATION
        container.classList.add("opacity-transition");

        resolve();

    } );      
    
}

/*--------------------------Get-one-element------------------------*/   // for future implementations

export async function printElement(baseUrl, id) {
    let url = baseUrl + 'item/' + id + '.json';

    return new Promise( function(resolve, reject) {

        axios.get( url, {
            params:{
                print: 'pretty',
            }
        })
        .then((response) => {
            let elem = writeNotice([response.data]);
            resolve(elem);
        })
        .catch( (err)=> { forErrors(err, PAGE, MAIN_CONTAINER) } );
    });
}

/*---------------------------------------Error-MANAGEMENT---------------------------------------*/



export function forErrors(error, page, container){

      if (error.response) {
  
          errorPage(error.response.status, error.response.statusText, page, container);
          return error;
  
        } else if (error.request) {

            if ( !error.request.status && !error.request.statusText ){
                errorPage("", error.message, page, container);
            }
            else {
                errorPage(error.request.status, error.request.statusText, page, container);
            }
            return error;
            
      } else {
        throw error;
      }
      /* console.log(error.config);  */ 
  }

/*-------------------------Manage-error-page-----------------------*/

  export function errorPage(status, statusText, page, container) {

    clearPage(page, container);

    let text = "";

    if ( status == "404" ) {
        text = "Page ";
    }

    let html = `
        <div class = "error-card" style = "margin-top:10em">
            <h1 style ='text-align:center'>Error ${status}</h1>
            <div style ='font-size:1.2em' >Something gone wrong: <div style ='color:red'>${text}${statusText}</div></div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', html);

  }
'use strict'

import  * as Library  from './functions-library.js';
import { Notice, GenericalNews, Story, Comment, Job } from './notice.js';

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
            forErrors(err) 
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
        .catch( (err)=> { forErrors(err) } );;
    });
}

/*-----------------------Write-NEWS-in-DOCUMENT--------------------*/

export function writeNotice(news, container=false){

    let res = [];

    for ( let data of news ) {

        let notice = null;
        let property = null;

        if ( data.type == "story" ){
            
            property = Library.exstractProperty(data, Story.argumentsOrder);

            notice = new Story(...property);
        }
        else if ( data.type == "comment" ){

            property = Library.exstractProperty(data, Comment.argumentsOrder);

            notice = new Comment(...property);
        }
        else if ( data.type == "job" ){

            property = Library.exstractProperty(data, Job.argumentsOrder);

            notice = new Job(...property);
        }

        else {

            property = Library.exstractProperty(data, GenericalNews.argumentsOrder);

            notice = new GenericalNews(...property);
        }

        let card = notice.createCard();

        if (container) {
            container.insertAdjacentHTML('beforeend',card);
        } else {
            res.push(card);
        }

    }

    if (!container) {
        return res;
    }
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
            console.log(response.data); /* CONSOLE LOG */
            let elem = writeNotice([response.data], container);
            resolve(elem);
        })
        .catch( (err)=> { forErrors(err) } );;
    });
}

/*---------------------------------------Error-MANAGEMENT---------------------------------------*/



export function forErrors(error){

    let loading = document.body.querySelector(".loading");
      if ( loading ) {
          loading.remove();
      }

      if (error.response) {
  
          errorPage(error.response.status, error.response.statusText);
  
        } else if (error.request) {

            if ( !error.request.status && !error.request.statusText ){
                errorPage("", error.message);
            }
            else {
                errorPage(error.request.status, error.request.statusText);
            }
            
      } else {
        throw error;
      }
      /* console.log(error.config);  */ 
  }

/*-------------------------Manage-error-page-----------------------*/

  export function errorPage(status, statusText) {

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

    let container = document.body.querySelector(".cards-container");
    container.insertAdjacentHTML('beforeend', html);

  }
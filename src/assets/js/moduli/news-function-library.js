'use strict'

import  * as library  from './functions-library.js';
import { Notice, GenericalNews, Story, Comment, Job } from './notice.js';

/*------------------------Get-simple-request-----------------------*/

export async function getRequest(url){

    return new Promise( function(resolve, reject) {
        axios.get( url, {
            params:{
                print: 'pretty',
            }
        })
        .then( (res) => { resolve(res) } );
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
        .then( () => { resolve(arrNews) } );
    });
}

/*-----------------------Write-NEWS-in-DOCUMENT--------------------*/

export function writeNotice(news, container=false){

    let res = [];

    for ( let data of news ) {

        let notice = null;
        let property = null;

        if ( data.type == "story" ){
            
            property = library.exstractProperty(data, Story.argumentsOrder);

            notice = new Story(...property);
        }
        else if ( data.type == "comment" ){

            property = library.exstractProperty(data, Comment.argumentsOrder);

            notice = new Comment(...property);
        }
        else if ( data.type == "job" ){

            property = library.exstractProperty(data, Job.argumentsOrder);

            notice = new Job(...property);
        }

        else {

            property = library.exstractProperty(data, GenericalNews.argumentsOrder);

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

export async function printElement(baseUrl, id) {
    let url = baseUrl + 'item/' + id + '.json';

    return new Promise( function(resolve, reject) {

        axios.get( url, {
            params:{
                print: 'pretty',
            }
        })
        .then((response) => {
            console.log(response.data); /* CONSOLE LOG */
            let elem = writeNotice([response.data]);
            resolve(elem);
        });
    });
}
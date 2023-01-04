'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-----------------------Import-functions.js-----------------------*/

import  * as library  from './moduli/functions.js';
import { Notice, Story, Comment, Job } from './moduli/notice.js';


let baseUrl = 'https://hacker-news.firebaseio.com/v0/';
let newStories = 'newstories.json';

let newStoriesId = null;

const NEWS_LIMIT = 10;

let seeNews = 0;

getRequest( baseUrl + newStories );

/*------------------------------------Internal-Function-Declaration-----------------------------------*/

/*-----------------------Get-Primary-request-----------------------*/

function getRequest(url){

    axios.get( url, {
        params:{
            print: 'pretty',
        }
    })
    .then((response) => {
        newStoriesId = response.data;
        printElement('192327'); /* Call print one element */
        /* getNoticeById(seeMore(response)); */
    })
    .catch( (err) => { library.forErrors(err) } );
}


/*-----------------------Get-news-by-array's-id--------------------*/

function getNoticeById(news) {
    let arrNews = [];

    let requests = news.map((id)=> {
        let url = baseUrl + 'item/' + id + '.json';
        return axios.get( url );
    });

    Promise.all(requests)   /* Get request for each ID */
    .then((responses) => {
        responses.forEach((response) => {
            arrNews.push(response.data);
        });
    })
    .then( ()=>{ 
        writeNotice(arrNews);   /* write in HTML Document */
    })
    .catch( (err) => { library.forErrors(err) } );

}

/*-----------------------Write-NEWS-in-DOCUMENT--------------------*/

function writeNotice(news){

    

    for ( let data of news ) {

        let notice = null;
        let property = null;

        if ( data.type == "story" ){
            
            property = library.exstractProperty(data, Story.argumentsOrder);

            notice = new Story(...property);
        }
        if ( data.type == "comment" ){

            property = library.exstractProperty(data, Comment.argumentsOrder);

            notice = new Comment(...property);
        }
        if ( data.type == "job" ){

            property = library.exstractProperty(data, Job.argumentsOrder);

            notice = new Job(...property);
        }

        let card = notice.createCard();

        let container = library.getPageElement(".cards-container");

        container.insertAdjacentHTML('beforeend',card);
    }
}

/*------------------------Get-id-of-more-news----------------------*/

function seeMore(response) {
    let news = _.slice(response.data, seeNews, NEWS_LIMIT);
    seeNews = news.length;

    return news;
}

/*--------------------------Get-one-element------------------------*/

function printElement(elem) {
    let url = baseUrl + 'item/' + elem + '.json';

    axios.get( url, {
        params:{
            print: 'pretty',
        }
    })
    .then((response) => {
        console.log(response.data); /* CONSOLE LOG */
        writeNotice([response.data]);
    })
    .catch( (err) => { library.forErrors(err) } );
}
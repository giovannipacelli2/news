'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-----------------------Import-functions.js-----------------------*/

import  * as library  from './moduli/functions.js';
import { Notice, Story, Comment } from './moduli/notice.js';


let baseUrl = 'https://hacker-news.firebaseio.com/v0/';
let newStories = 'newstories.json';

let newStoriesId = null;

const NEWS_LIMIT = 10;

let seeNews = 0;

getRequest( baseUrl + newStories );

/* printElement('2921983'); */

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
        printElement(newStoriesId[102]); /* Call print one element */
        getNoticeById(seeMore(response));
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

    for ( let n of news ) {

        let notice = null;

        if ( n.type == "story" ){
            notice = new Story(n.by, n.id, n.time, n.type, n.title, n.url, n.score);
        }
        if ( n.type == "comment" ){
            notice = new Comment(n.by, n.id, n.time, n.type, n.parent, n.text);
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
    debugger;
    let url = baseUrl + 'item/' + elem + '.json';

    axios.get( url, {
        params:{
            print: 'pretty',
        }
    })
    .then((response) => {
        debugger;
        writeNotice([response.data]);
    })
    .catch( (err) => { library.forErrors(err) } );
}
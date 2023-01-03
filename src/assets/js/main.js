'use strict'

/*-----------------------------------------------------------------*/

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';

/*-----------------------Import-functions.js-----------------------*/

import  * as library  from './moduli/functions.js';
import Notice from './moduli/notice.js';


let baseUrl = 'https://hacker-news.firebaseio.com/v0/';
let newStories = 'newstories.json';
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
        let news = _.slice(response.data, seeNews, NEWS_LIMIT);
        seeNews = news.length;
        getNoticeById(news);
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
        let notice = new Notice(n.title, n.text, n.time, n.url);
        let card = notice.createCard();

        let container = library.getPageElement(".cards-container");

        container.insertAdjacentHTML('beforeend',card);
    }
}
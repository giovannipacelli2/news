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

const NEWS_LIMIT = 10;

let seeNews = 0;

main();

async function main(){

    try {
        let response = await getRequest( baseUrl + newStories );
        newStoriesId = response.data;

        let nNotice = seeMore(response);

        let arrayNews = await getNoticeById( nNotice );

        writeNotice(arrayNews);   /* write in HTML Document */
    }
    catch(err) {
        library.forErrors(err); 
    }
}



/*------------------------------------Internal-Function-Declaration-----------------------------------*/

/*-----------------------Get-Primary-request-----------------------*/

async function getRequest(url){

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

async function getNoticeById(news) {
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

function writeNotice(news){

    

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
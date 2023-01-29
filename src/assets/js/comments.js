'use strict'

import  * as NewsLibrary  from './modules/news-function-library.js';
import  * as Library  from './modules/functions-library.js';
import Notice from './modules/notice.js';

import { PAGE, MAIN_CONTAINER, newStories, baseUrl } from './main.js';


MAIN_CONTAINER.addEventListener("click", seeComments);
/* MAIN_CONTAINER.addEventListener("dblclick", (e)=>{debbugger; e.preventDefault()}); */



async function seeComments(e) {

    let button = e.target.closest(".commentButton");

    if ( !button ) {

        if ( e.target.closest(".comment-container") ) return;

        let allComments = document.body.querySelectorAll(".comment-container");

        if ( allComments ) {

            for ( let comment of allComments) {
                TRANSITION.out(comment);
            } 

            let allCards = document.body.querySelectorAll( ".cards") ;

            for ( let card of allCards) {
                card.classList.remove("show-comments");
            } 
        } 

        return;
    }

    let card = e.target.closest(".cards");

    if( !card.classList.contains("show-comments")) {

        MAIN_CONTAINER.removeEventListener("click", seeComments);

        let id = button.dataset.id;     // getting the notice id

        let request = await NewsLibrary.getNoticeById( baseUrl, [id] );

        let commentsId = request[0].kids;

        let commentArr = await NewsLibrary.getNoticeById( baseUrl, commentsId );

        let htmlCommentArr = writeComment(commentArr);

        let html = htmlCommentArr.reduce( (acc, html)=> {
            let res = acc + html + `\n`;
            return res;
        }, "" );

        card.classList.add("show-comments");

        let div = document.createElement('DIV');
        div.classList.add( "comment-container" ,"visible" );
        
        card.after(div);
        
        TRANSITION.in(div);
        
        div.insertAdjacentHTML("beforeend", html);
        
        MAIN_CONTAINER.addEventListener("click", seeComments);
    }
    else {
        let divComments = card.nextElementSibling;

        TRANSITION.out(divComments);
        card.classList.remove("show-comments");

    }
}

/*---------------------Write-COMMENTS-in-DOCUMENT------------------*/

function writeComment(comments){

    try{
        let res = [];

        for ( let data of comments ) {

            let comment = null;
            let property = null;

            // Creates CARD

            property = Library.exstractProperty(data, Notice.argumentsOrder);

            comment = new Notice(...property);

            let html = comment.createComment(top);

            res.push(html);     // Array of CARDs html code

        }
        return res;

    } catch(err){
        NewsLibrary.clearPage(PAGE, MAIN_CONTAINER);
        throw err;
    }
}

/*----------------------------TRANSITION---------------------------*/

const TRANSITION = {

    in : function(div) {

        div.style.top = "-100px";
        div.style.transition = "top 0.5s, opacity 0.8s";  

        setTimeout( ()=>{ 
            div.style.top = "-35px";
            div.style.opacity = "1"; 
        }, 10 );
    },

    out : function(div) {

        div.style.transition = "top 0.5s, opacity 0.8s";  

        div.addEventListener('transitionend', ()=>{ 
            div.remove();           
        });

        setTimeout( ()=>{ 
            div.style.top = "-100px";
            div.style.opacity = "0"; 
        }, 10 );

    }
}
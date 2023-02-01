'use strict'

import  * as NewsLibrary  from './library/news-function-library.js';
import  * as Library  from './library/functions-library.js';
import Comment from './classes/comment.js';

import { PAGE, MAIN_CONTAINER, newStories, baseUrl } from '../main.js';


MAIN_CONTAINER.addEventListener("click", seeComments);


async function seeComments(e) {

    let button = e.target.closest(".commentButton");

    /*-----------------If target isn't comment button-----------------*/

    if ( !button ) {

        if ( e.target.closest(".comment-container") ) return;

        // Removes comments by clicking anywhere in the document
        // EXCEPT the itself's comment

        let allComments = document.body.querySelectorAll(".comment-container");

        if ( allComments ) {

            for ( let comment of allComments) {
                TRANSITION.out(comment);    // Remove all comments
            } 

            let allCards = document.body.querySelectorAll( ".cards") ;

            for ( let card of allCards) {
                card.classList.remove("show-comments");
            } 
        } 

        return;
    }

    /*---------------------CLICK ON COMMENT BUTTON--------------------*/

    let card = e.target.closest(".cards");
    let linksContainer = card.querySelector(".links-container");

    if( !card.classList.contains("show-comments")) {    // SEE COMMENTS

        MAIN_CONTAINER.removeEventListener("click", seeComments);

        let id = button.dataset.id;     // getting the notice id

        let html;

        // Check the ID

        // NB the constructor of every Notice inserts its id in the button 
        // only if there are comments

        if ( id !== "" ){
            let commentObj = await getCommentsByNoticeId(id);
            html = commentObj.html;

            let commentButton = card.querySelector(".n-comments");
            commentButton.textContent = commentObj.nComments;
        }

        else if ( id == "" ){
            html = `<span>Non ci sono commenti</span>`
        }

        // Creates the elements that make up the comments

        card.classList.add("show-comments");
        linksContainer.classList.add("show-comments");

        let div = document.createElement('DIV');
        div.classList.add( "comment-container" ,"visible" );
        
        card.after(div);
        
        TRANSITION.in(div);
        
        div.insertAdjacentHTML("beforeend", html);
        
        MAIN_CONTAINER.addEventListener("click", seeComments);
    }
    else {
        // Remove the comments by clicking on comment button

        let divComments = card.nextElementSibling.closest( ".comment-container");

        TRANSITION.out(divComments);
        card.classList.remove("show-comments");
        linksContainer.classList.remove("show-comments");

    }
}

/*-------------------------Get-HTML-Comments-----------------------*/

// getCommentsByNoticeId returns an HTML message
// in case of null/undefinided or void response

// else returns an object that has the HTML code of comments 
// and the number of how many are there

async function getCommentsByNoticeId(id) {

    let error = `<span style="color:red">Errore nel recupero del commento</span>`;

try{
        // Get Notice by ID
        let request = await NewsLibrary.getNoticeById( baseUrl, [id] );

        // Put the comments array in commentsIds
        let commentsIds = request[0].kids;

        // Get the Comments by Ids
        let commentArr = await NewsLibrary.getNoticeById( baseUrl, commentsIds );

        if ( !commentArr ) { return error; }

        // Get the array of HTML code by comments
        let htmlCommentArr = writeComment(commentArr);

        return {
            html: htmlCommentArr.reduce( (acc, html)=> {
                        let res = acc + html + `\n`;
                        return res;
                    }, "" ),

            nComments : commentsIds.length
        }
        
    }
    catch(err) { NewsLibrary.forErrors(err, PAGE, MAIN_CONTAINER) };

}



/*---------------------Write-COMMENTS-in-DOCUMENT------------------*/

function writeComment(comments){

    try{
        let res = [];

        for ( let data of comments ) {

            let comment = null;
            let property = null;

            // Creates CARD

            property = Library.exstractProperty(data, Comment.argumentsOrder);

            comment = new Comment(...property);

            let html = comment.exportHtmlElement();

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

        div.style.top = "-150px";
        div.style.transition = "top 0.8s, opacity 0.8s 0.1s";  

        setTimeout( ()=>{ 
            div.style.top = "-35px";
            div.style.opacity = "1"; 
        }, 50 );
    },

    out : function(div) {

        div.style.transition = "top 0.8s 0.2s, opacity 0.8s";  

        div.addEventListener('transitionend', ()=>{ 
            div.remove();           
        });

        setTimeout( ()=>{ 
            div.style.top = "-150px";
            div.style.opacity = "0"; 
        }, 50 );

    }
}
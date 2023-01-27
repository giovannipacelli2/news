'use strict'

import  * as NewsLibrary  from './modules/news-function-library.js';
import  * as Library  from './modules/functions-library.js';
import Notice from './modules/notice.js';

import { PAGE, MAIN_CONTAINER, newStories, baseUrl } from './main.js';


MAIN_CONTAINER.addEventListener("click", seeComments);



async function seeComments(e) {

    let button = e.target;

    if ( !button.classList.contains("commentButton") ) return;

    let card = e.target.offsetParent.closest(".cards");

    if( !card.classList.contains("show-comments")) {

        let id = button.dataset.id;     // getting the notice id

        let request = await NewsLibrary.getNoticeById( baseUrl, [id] );

        let commentsId = request[0].kids;

        let commentArr = await NewsLibrary.getNoticeById( baseUrl, commentsId );

        let html = writeComment(commentArr);

        card.classList.add("show-comments", "mb-0");

        let div = document.createElement('DIV');
        div.classList.add( "comment-container" ,"visible" );

        card.after(div);

        div.insertAdjacentHTML("beforeend", html);
        // Appends in HTML with CSS animation
        /* await NewsLibrary.animationAppendStories(html, div); */
    }
    else {
        card.classList.remove("show-comments", "mb-0");
        card.nextElementSibling.remove();

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
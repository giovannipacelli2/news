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

    let id = button.dataset.id;     // getting the notice id

    let request = await NewsLibrary.getNoticeById( baseUrl, [id] );

    let commentsId = request[0].kids;

    let commentArr = await NewsLibrary.getNoticeById( baseUrl, commentsId );

    let html = NewsLibrary.writeNotice(commentArr);

    // Appends in HTML with CSS animation
    await NewsLibrary.animationAppendStories(html, card);
    
}
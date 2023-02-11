'use strict'

import Notice from "./notice.js";
import USER_IMG from '../../../img/user.png';

export default class Comment extends Notice {
    /*---------------------------------------------------COMMENT-MANAGEMENT---------------------------------------------------*/

    exportHtmlElement() {
        

        if (!this.by && !this.text) return "";
    
        let body = `
             <div class="comment">
                <div class="user-container">
                    <img class="comment-img" src=${USER_IMG}>
                    <span class="card-text by">${this.by}:</span>
                </div>
    
                <div class="comment-text-container">
                    <p class="card-text text">${this.text}</p>
                    <span class="other">...altro</span>
                    <p class="card-text text-end data">${this.fullDate}-${this.fullHours}</p>
                </div>
               </div>
        `;
    
        return body;
    }
}

import COMMENT_IMG from '../../../img/comment.png';

/*--------------------------------CLASS-NOTICE----------------------------------*/

export default class Notice{

    constructor(by, id, time, type, title, text, url, score, kids) {
        this.by = by;
        this.id = id;
        this.time = time;
        this.type = type;
        this.title = title;
        this.text = text;
        this.url = url;
        this.score = score;
        this.kids = kids;

        this.fullDate = this.convertTime(this.time);
        this.fullHours = this.convertHours(this.time);
        this.comment = this.commentButton();
    }

    /*---------------Convert-Date-from-Unix-Time-RETURNS-DD/MM/YYYY---------------*/

    convertTime(time) {
        let date = new Date( time * 1000 );

        let day = date.getDate(); 
        let mounth = date.getMonth() + 1; 
        let year = date.getFullYear();

        let fullItData;  

        if ( day > 0 && day < 10 ) {
            day = "0" + day;
        }

        if ( mounth > 0 && mounth < 10 ) {
            mounth = "0" + mounth;
        }

        fullItData = day + "/" + mounth + "/" + year;

        return fullItData;
    }

    /*----------------------Return-Hours-from-Unix-Time---------------------------*/


    convertHours(time) {
        let date = new Date( time * 1000 );

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if ( hours >= 0 && hours < 10 ) {
            hours = "0" + hours;
        }

        if ( minutes >= 0 && minutes < 10 ) {
            minutes = "0" + minutes;
        }

        if ( seconds >= 0 && seconds < 10 ) {
            seconds = "0" + seconds;
        }

        let fullHours = hours + ":" + minutes + ":" + seconds;

        return fullHours;
    }

    /*-----------------------------------------------------CARD-MANAGEMENT----------------------------------------------------*/

    /*-------------------Returns-HTML-code-IF-URL-is-present----------------------*/


    urlController() {
        if (this.url !== "" ) {
          return `<a href="${this.url}" target="_blank" class="card-link">${_.capitalize(this.type)} link</a>`;
        }
        else return "";  
    }

    /*-----------Returns-HTML-code-based-on-the-presence-of-text-or-title---------*/

    titleOrText() {
        if (this.title !== "" ) {
            return `<h5 class="card-title">${this.title}</h5>`;
          }
        else if (this.title == "" && this.text !== "") {
            return `
                <h5 class="card-title">${_.capitalize(this.type)}</h5>
                <p class="card-text">${this.text}</p>
            `;
          }
        else return ""; 
    }

    /*---------------------------Create-Comment-Button----------------------------*/


    commentButton() {
        if ( this.type == "story" ) {

            let id;

            if ( this.kids ) { id = this.id }
            else { id = "" }

            return `
                <button class="cardButton commentButton" type="button" data-id="${id}">
                    <span>Commenti: <span class="n-comments">${this.kids.length}</span></span>
                    <img src=${COMMENT_IMG} alt="comments" class="comment-icon">
                </button>
            `;
        }
        else return "";
    }


    /*--------------Creates-the-HTML-code-of-a-card-and-returns-it----------------*/

    exportHtmlElement() {

        let title = this.titleOrText();

        let url = this.urlController();
        let commentButton = this.commentButton();

        let none = ()=>{
            if (!url && !commentButton) {return `style = "display:none"`;}
            else { return "" }
        };

        let body = `
            <div class="card cards">
                <div class="card-body">

                    ${title}
                    <p class="card-text by">By: ${this.by}</p>
                    <p class="card-text text-end me-4">Data e ora:</p>
                    <p class="card-text text-end me-1">${this.fullDate}-${this.fullHours}</p>
                    
                </div>

                <div class="links-container" ${none()}> 
                    <div class="links" ${none()}>
                        ${commentButton}
                        ${url}
                    </div>         
                </div> 
            </div>
        `;
        return body;
    }

};


/*-------------------------------STATIC-PROPERTY--------------------------------*/

/*------Arrays that store the specific order to constructor arguments of Class-------------*/

Notice.argumentsOrder = ['by', 'id', 'time', 'type', 'title', 'text', 'url', 'score', 'kids'];
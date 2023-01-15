
/*-----------------------------PARENT-CLASS-NOTICE------------------------------*/

export class Notice{

    constructor(by, id, time, type) {
        this.by = by;
        this.id = id;
        this.time = time;
        this.fullDate = this.convertTime(this.time);
        this.type = type;
    }

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

    urlController() {
        if (this.url !== "" ) {
          return `<a href="${this.url}" target="_blank" class="card-link">${_.capitalize(this.type)} link</a>`;
        }
        else return "";  
    }

    createCard(){
        let url = this.urlController();

        let body = `
            <div class="card cards">
                <div class="card-body">

                <h5 class="card-title">${_.capitalize(this.type)}</h5>
                <p class="card-text by">By: ${this.by}</p>
                <p class="card-text text-end me-5">Data:</p>
                <p class="card-text text-end me-4">${this.fullDate}</p>
                ${url}

                </div>
            </div>
        `;
        return body;
    }
};

/*-----------------------------CHILDS-CLASSES-NOTICE----------------------------*/

/*-------------------CLASS-GENERICAL-NEWS-------------------*/

export class GenericalNews extends Notice{
    constructor(by, id, time, type, title, text, url, score){
        super(by, id, time, type);

        this.title = title;
        this.text = text;
        this.url = url;
        this.score = score;
    }

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

    createCard() {
        let url = this.urlController();
        let title = this.titleOrText();

        let body = `
            <div class="card cards">
                <div class="card-body px-4">

                    ${title}
                    <p class="card-text by">By: ${this.by}</p>
                    <p class="card-text text-end me-5">Data:</p>
                    <p class="card-text text-end me-4">${this.fullDate}</p>
                    ${url}

                </div>
            </div>
        `;
        return body;
    }
}


/*-----------------------CLASS-STORY------------------------*/

export class Story extends Notice{
    constructor(by, id, time, type, title, url, score){
        super(by, id, time, type);
        this.title = title;
        this.url = url;
        this.score = score;
    }

    createCard() {                                                                      //HERE-----------------------------
        let url = this.urlController();

        let body = `
            <div class="card cards">
                <div class="card-body px-4">

                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text by">By: ${this.by}</p>
                    <p class="card-text by">ID: ${this.id}</p>
                    <p class="card-text text-end me-5">Data:</p>
                    <p class="card-text text-end me-4">${this.fullDate}</p>
                    ${url}

                </div>
            </div>
        `;
        return body;
    }
}

/*----------------------CLASS-COMMENT-----------------------*/

export class Comment extends Notice{
    constructor(by, id, time, type, parent, text = ""){
        super(by, id, time, type);
        this.parent = parent;
        this.text = text;
    }

    createCard() {
        let body = `
            <div class="card cards">
                <div class="card-body px-4">

                    <h5 class="card-title">${_.capitalize(this.type)}</h5>
                    <p class="card-text by">By: ${this.by}</p>
                    <p class="card-text">${this.text}</p>
                    <p class="card-text text-end me-5">Data:</p>
                    <p class="card-text text-end me-4">${this.fullDate}</p>

                </div>
            </div>
        `;
        return body;
    }
}

/*------------------------CLASS-JOB-------------------------*/

export class Job extends Notice{
    constructor(by, id, time, type, text, title, url, score){
        super(by, id, time, type);
        this.text = text;
        this.title = title;
        this.url = url;
        this.score = score;
    }

    createCard() {

        let url = this.urlController();
        let body = `
            <div class="card cards">
                <div class="card-body px-4">

                    <h5 class="card-title">${_.capitalize(this.type)}</h5>
                    <p class="card-text by">By: ${this.by}</p>
                    <p class="card-text">${this.text}</p>
                    <p class="card-text text-end me-5">Data:</p>
                    <p class="card-text text-end me-4">${this.fullDate}</p>
                    ${url}

                </div>
            </div>
        `;
        return body;
    }
}

/*-------------------------------STATIC-PROPERTY--------------------------------*/

/*------Arrays that store the specific order to constructor arguments of Class-------------*/

Story.argumentsOrder = ['by', 'id', 'time', 'type', 'title', 'url', 'score'];

Comment.argumentsOrder = ['by', 'id', 'time', 'type', 'parent', 'text'];

Job.argumentsOrder = ['by', 'id', 'time', 'type', 'text', 'title', 'url', 'score'];

GenericalNews.argumentsOrder = ['by', 'id', 'time', 'type', 'title', 'text', 'url', 'score'];
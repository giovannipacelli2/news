export default class Notice{

    constructor(title = 'Titolo', text = "", date, url) {
        this.title = title;
        this.text = text;
        this.date = new Date(date);
        this.fullDate = this.date.getDate() + "/" + (this.date.getMonth()+1) + "/" + this.date.getFullYear();
        this.url = url;
    }

    createCard(){
        let body = `
            <div class="card cards">
                <div class="card-body">

                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.text}</p>
                <p class="card-text">${this.fullDate}</p>
                <a href="${this.url}" target="_blank" class="card-link">News link</a>

                </div>
            </div>
        `;
        return body;
    }
};
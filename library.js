

function Book(title, author, pages){
    if(!new.target){
        throw Error("The function must be called by the 'new' operator")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = 0;
    this.id = crypto.randomUUID();
}

Book.prototype.info = function(){
    return (`${this.title} by ${this.author}, ${this.pages} pages.`)
}


const library = function(){

    const books = [];

    const pushBook = function (t, a, p){
        let book = new Book(t, a, p)
        books.push(book);
    }

    const popBook = function (index){
        books.pop(index);
    }

    return{pushBook, popBook, books}
}()

const eventManager = function(){
    const addBtn = document.querySelector('.addBtn');
    const confirmBtn = document.querySelector('.confirm');
    const cancelBtn = document.querySelector('.cancel')
    const modal = document.querySelector('dialog');
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    const pages = document.querySelector('.pages')

    addBtn.addEventListener('click', ()=>{modal.showModal()});
    confirmBtn.addEventListener('click', function(){
        library.pushBook(title.value, author.value, pages.value);
        modal.close();
    })

    cancelBtn.addEventListener('click', ()=>{modal.close()});

}()

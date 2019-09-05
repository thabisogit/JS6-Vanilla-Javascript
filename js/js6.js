class Book {
    constructor(title, booktype, description) {
        this.title = title;
        this.booktype = booktype;
        this.description = description;
    }
}

class UI {
    addBookToList(book) {

        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.booktype}</td>
            <td>${book.description}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
       document.getElementById('title');

    }

    showAlert(message, className) {

        const div = document.createElement('div');

        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-list');
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);

    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('title').value = '';
        document.getElementById('title').value = '';
    }

}

document.getElementById('book-form').addEventListener('submit',function (e) {
    const title = document.getElementById('bookTitle').value;
    const bookType = document.getElementById('bookType').value;
    const description = document.getElementById('bookDescription').value;

    const book = new Book(title, bookType, description);

    const ui = new UI();

    if(title === '' || bookType === '' || description === ''){
        ui.showAlert('Fill in all fields', 'error');
    }else{
        ui.addBookToList(book);
        ui.showAlert('Book Added','success');
        setTimeout(function () {
            ui.showAlert('Book Added','success')
        }, 3000);
        setTimeout(function () {
            ui.clearFields()
        }, 3000);
        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed','success');
    e.preventDefault();
});
const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayBooks(data.docs))
}

const displayBooks = books => {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
            <h4>Book Name : ${book.title}</h4>
            <h6>Author: ${book.author_name}</h6>
            <h6>Publisher: ${book.publisher}</h6>
            <h6>First Publish: ${book.first_publish_year}</h6>
            </div>
          </div>
        `
        bookContainer.appendChild(div);
    })
}


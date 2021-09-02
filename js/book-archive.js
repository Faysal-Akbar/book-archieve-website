const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
     
    /*-----------------------
            Calling API
    ------------------------*/
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayBooks(data.docs))
}

const displayBooks = books => {
    const bookContainer = document.getElementById('book-container');
    const countingNumber = document.getElementById('counting');
    const errorMessage = document.getElementById('error');
        if(books.length === 0){
            errorMessage.innerHTML = `
                <h3 class="text-center text-danger">Result Not Found</h3>
            `
        }
    countingNumber.innerHTML = `
        <h3 class="text-center text-success">Total Book Found : ${books.length}</h3>
    `;
    bookContainer.innerHTML = '';
    books.forEach(book => {
        errorMessage.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 bg-light shadow-lg">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="text-success">Book Name : ${book.title}</h4>
                <h6>Author: ${book.author_name}</h6>
                <h6>Publisher: ${book.publisher}</h6>
                <h6>First Publish: ${book.first_publish_year}</h6>
            </div>
        </div>
        `
        bookContainer.appendChild(div);
    })
}


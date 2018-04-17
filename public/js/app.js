const bookCollection = [];

const ReadingItem = function (title, author, category, topic) {
  this.title = title;
  this.author = author;
  this.category = category;
  this.topic = topic;
}

bookListRefresh = function () {
  const bookList = document.querySelector('#book-list');
  bookList.innerHTML = '';
  for (book of bookCollection) {
    const newReadingItem = document.createElement('ul');
    bookList.appendChild(newReadingItem);

    const title = document.createElement('li')
    title.textContent = book.title;
    newReadingItem.appendChild(title);

    const author = document.createElement('li');
    author.textContent = book.author;
    newReadingItem.appendChild(author);

    const category = document.createElement('li');
    category.textContent = book.category;
    newReadingItem.appendChild(category);

    const topic = document.createElement('li');
    topic.textContent = book.topic;
    newReadingItem.appendChild(topic);
  }
}

handleBookFormSubmit = function (event) {
  event.preventDefault();
  let category = '';
  const readingItem = new ReadingItem(
    this.title.value,
    this.author.value,
    this.category.value,
    this.genre.value
  )
  bookCollection.push(readingItem);
  bookListRefresh();
  this.reset();
}


document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.querySelector('#book-form');

  bookForm.addEventListener('submit', handleBookFormSubmit);
});
